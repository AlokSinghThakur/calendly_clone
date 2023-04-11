const Sequelize = require('sequelize')
const userTableModel = require("./user")
const callScheduleModel = require("./callSchedule")


exports.db_config = new Sequelize('localhost','root','54321',{
    host:'localhost',
    dialect: 'mysql',
    logging:false,
    pool:{max:5,min:0,idle:10000}
});

exports.userTableModel = userTableModel(exports.db_config);
exports.callScheduleModel = callScheduleModel(exports.db_config)