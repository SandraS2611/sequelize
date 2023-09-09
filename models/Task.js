const { sequelize } = require("../database")
const { DataTypes } = require("sequelize")

const TaskModel = sequelize.define("tasks", {
    title: DataTypes.STRING,
    done: DataTypes.BOOLEAN,
})

module.exports = { TaskModel }