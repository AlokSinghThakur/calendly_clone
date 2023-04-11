const userModule = require("../../index").userTableModel

module.exports = {

    async createHost(data){
        return await userModule.create(data);
    },

    async getAllHost(){
        return await userModule.findAll({
            attributes:["user_id","name","email","gender","mobile_no","role"]
        })
    }


}