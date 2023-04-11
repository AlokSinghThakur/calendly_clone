const express = require("express");
require('dotenv').config();
const {google} = require('googleapis');
const dayjs = require('dayjs')
const axios = require('axios');
const app = express()
app.use(express.json())

// const calender = google.calendar({
//     version: "v3",
//     auth: process.env.API_KEY
// })


const port = process.env.PORT || 2000

// const oauth2Client = new google.auth.OAuth2(
//     process.env.CLIENT_ID,
//     process.env.CLIENT_SECRET,
//     process.env.REDIRECT_URL
// )

// const scopes = [
//     'https://www.googleapis.com/auth/calendar'
// ]
// const token = ""

// app.get("/",(req,res)=>{
//     res.send("its working")
// })

// app.get("/google",(req,res) => {
//     const url = oauth2Client.generateAuthUrl({
//         access_type :"offline",
//         scope : scopes,
//     });

//    res.redirect(url)
//     console.log(url)
// })


// app.get('/google/redirect', async (req,res) => {
//     const code = req.query.code;

//     const { tokens} = await oauth2Client.getToken(code);

//     oauth2Client.setCredentials(tokens);

//     res.send("You've successfully logged in")

// })

const models = require('./models')
const USER_ROUTES = require('./routes/index')
app.use('/user',USER_ROUTES)

models.db_config
.sync({
    // force:true
})
.then(()=>{
    console.log("Connected to Database")
})
.catch(err => {
    console.log("Database not connected",err)
})


app.listen(port, () => {
    console.log(`App is listening at localhost:${port}`)
})