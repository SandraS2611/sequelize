const express = require("express");
const cors = require("cors")
const morgan = require("morgan")

const { sequelize } = require("./database");

const app = express();


app.use(express.json())
app.use(cors())
app.use(morgan("dev"))


app.use("/task", require("./routes/task.routes"));


app.listen(3000, () => {

  sequelize.sync()
    .then(() => console.log("DB is connected"))
    .catch(err => console.log(err))

  console.log("server on Port 3000")
});
