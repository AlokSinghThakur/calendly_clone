const callScheduleModule = require("../../index").callScheduleModel;
const { Op, Sequelize } = require("sequelize");

module.exports = {
  async createCallSchedule(data) {
    return await callScheduleModule.create(data);
  },
  async getCallScheduleById(host_id) {
    return await callScheduleModule.findAll({
      where: { [Op.and]: [{ host_id: host_id }, { status: "open" }] },
    });
  },
};
