const {DataTypes} = require('sequelize');

module.exports = (db_config) => {
  const userTable = db_config.define("usersTable", {
    user_id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      allowNull: false,
      primaryKey: true,
    },
    name: { type: DataTypes.STRING },
    email: { type: DataTypes.STRING },
    password: { type: DataTypes.STRING },
    gender: { type: DataTypes.STRING },
    mobile_no: { type: DataTypes.INTEGER },
    role: { type: DataTypes.STRING },
  });
  return userTable;
};