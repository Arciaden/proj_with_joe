const express = require("express");
const app = express();
require("dotenv").config();
const mongoose = require("mongoose");
const cors = require("cors");

dbUrl = process.env.MONGO_URL;

mongoose
  .connect(dbUrl || "mongodb://localhost:27017/myapp")
  .then(console.log("connected to mongo"))
  .catch((err) => "Problem connecting to database" + err);

var corsOptions = {
  origin: "http://localhost:3000",
  optionsSuccessStatus: 200,
};
app.use(cors(corsOptions));

const checklistRoutes = require("./routes/checklistRoutes");

const port = process.env.PORT;

//middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//routes
app.use("/", checklistRoutes);

app.listen(port || "4000", (req, res) => {
  console.log("listening on port 4000");
});
