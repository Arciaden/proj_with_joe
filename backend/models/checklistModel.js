const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const checklistSchema = new Schema({
  title: String,
  description: String,
  // date: Date(),
  completed: Boolean,
});

module.exports = mongoose.model("Checklist", checklistSchema);
