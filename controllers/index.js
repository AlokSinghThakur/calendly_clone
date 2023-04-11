const hostQueries = require("../models/queries/host/index")
const callScheduleQueries = require("../models/queries/callSchedule/index")

module.exports = {
    async createHost(req,res){
        let user_id = req.body.userId;
        let name = req.body.name;
        let email = req.body.email;
        let gender = req.body.gender;
        let mobile_no = req.body.mobileNo;
        let role = req.body.role;

        if(!user_id||!name||!gender||!email||!mobile_no||!role){
            return res.status(422).send({ status: "Data is required" })
        }

        try {
            let data = {
                user_id : user_id,
                name:name,
                email:email,
                gender:gender,
                mobile_no:mobile_no,
                role:role
            }
            await hostQueries.createHost(data)
            return res.status(200).send({ code: 200, status: "success", msg: "Host added successFully" })

        }catch (err) {
            console.log("error : ", err);
            return res.status(422).send({ code: 422, status: 'failed', msg: err.message });

        }
    },

    async getHost(req,res) {

        try {
            let data = await hostQueries.getAllHost()
            return res.status(200).send({ code: 200, status: "success", data:data });
        }catch (err) {
            console.log("error : ", err);
            return res.status(422).send({ code: 422, status: 'failed', msg: err.message })

        }
    },

    // async googleAuth(req,res){
    //     const url = oauth2Client.generateAuthUrl({
    //         access_type :"offline",
    //         scope : scopes,
    //     });
    
    //    res.redirect(url)

    // },

    async createCallSchedule(req,res){
        let id = req.body.id;
        let host_id = req.body.hostId;
        let user_id = req.body.userId;
        let meeting_time = req.body.meetingTime; //24 hr formate
        let meeting_date = req.body.meetingDate;
        let status = req.body.status;

        try {
            let data = {
                 id : id,
                 host_id:host_id,
                 user_id:user_id,
                 meeting_time:meeting_time,
                 meeting_date:meeting_date,
                 status:status
            }
            await callScheduleQueries.createCallSchedule(data)
            return res.status(200).send({ code: 200, status: "success", msg:"call Schedule successfully"})
        }
        catch (err) {
            console.log("error : ", err);
            return res.status(422).send({ code: 422, status: 'failed', msg: err.message });
        }
    },

    async getCallSchedule(req,res){
        
        let host_id = req.body.hostId;
        let meeting_time = req.body.meetingTime; //24 hr formate
        let meeting_date = req.body.meetingDate;
        if(!host_id){

            return res.status(422).send({ status: "Data is required" })
            
        }

        try{
        let data = await callScheduleQueries.getCallScheduleById(host_id)
        return res.status(200).send({ code: 200, status: "success", data:data });

        }catch (err) {
            console.log("error : ", err);
            return res.status(422).send({ code: 422, status: 'failed', msg: err.message });
        }
    },

    
    async createGoogleCalnederEvent(req,res){
        try {
            let summary = req.body.summary;
            let description = req.body.description;
            let location = req.body.location;
            let startDateTime = req.body.startDateTime;
            let endDateTime = req.body.endDateTime;

            oauth2Client.setCredentials({refres_token:REFRESH_TOKEN})
            const calendar = google.calendar('v3');
            const data = await calendar.events.inser({
                auth: oauth2Client,
                calendarId: 'primary',
                requestBody: {
                    summary: summary,
                    description: description,
                    location: location,
                    colorId: '7',
                    start:{ 
                        dateTime: new Date(startDateTime)
                    },
                    end: {
                        dateTime: new Date(endDateTime)
                    }
                },
            })
            return res.status(200).send({ code: 200, status: "success", data:data });

        }catch (err) {
            console.log("error : ", err);
            return res.status(422).send({ code: 422, status: 'failed', msg: err.message });
        }
    },
    async scheduleEvent (req,res){
        await calender.events.insert({
         calendarId:"primary",
         auth : oauth2Client,
         requestBody:{
             summary : "This is a test Event",
             description : "Some event that is very very important",
             start:{
                 dateTime: dayjs(new Date()).add(1,'day').toISOString(),
                 timeZone: "Asia/Kolkata",
             },end:{
                 dateTime: dayjs(new Date()).add(1,'day').add(1,"hour").toISOString(),
                 timeZone: "Asia/Kolkata",
             },
         }
        });
     
        res.send({
         msg:"Done"
        })
     }
}