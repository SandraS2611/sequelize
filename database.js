const { Sequelize } = require("sequelize")

const sequelize = new Sequelize('mibase_sss', 'root', '', {
    host: 'localhost',
    dialect:"mysql"
  });

  module.exports = { sequelize }