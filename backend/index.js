const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const app = express();
require("dotenv").config();

dbUrl = process.env.MONGO_URL;

mongoose
  .connect(dbUrl)
  .then(console.log("connected to mongo"))
  .catch((err) => "Problem connecting to database" + err);

var corsOptions = {
  origin: "http://localhost:3000",
  optionsSuccessStatus: 200, // some legacy browsers (IE11, various SmartTVs) choke on 204
};
app.use(cors(corsOptions));

const checkListRoutes = require("./routes/checklistRoutes");

const port = process.env.PORT;

//middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//routes
app.use("/", checkListRoutes);

console.log(port);
app.listen(port || "4000", (req, res) => {
  console.log("listening on port 4000");
});
