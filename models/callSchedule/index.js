const { DataTypes } = require("sequelize");

module.exports = (db_config) => {
  const callSchedule = db_config.define("callSchedule", {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      allowNull: false,
      primaryKey: true,
    },
    host_id: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    user_id: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    meeting_time: {                 //24 hr formate
      type: DataTypes.STRING,
      allowNull: false,
    },
    meeting_date: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    status: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    createdAt: {
      type: DataTypes.DATE,
      default: DataTypes.NOW,
    },
    updatedAt: {
      type: DataTypes.DATE,
      default: null,
    },
  });
  return callSchedule;
};
