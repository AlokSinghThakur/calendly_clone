const express = require("express");
const ROUTES = express.Router();

const controller = require("../controllers/index")

ROUTES.post('/create-host',controller.createHost)
ROUTES.get('/get-all-host',controller.getHost)
ROUTES.post('/create-call-schedule',controller.createCallSchedule)
ROUTES.get('/get-call-availability',controller.getCallSchedule)
ROUTES.get('/schedule-event',controller.scheduleEvent)
ROUTES.get('/google-auth',controller.googleAuth)
ROUTES.get('/google/redirect',controller.googleAuthRedirect)


module.exports = ROUTES