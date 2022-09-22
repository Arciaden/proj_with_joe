const Checklist = require("../models/checklistModel");

module.exports.index = async (req, res) => {
  try {
    const checklists = await Checklist.find({});
    res.status(200).json(checklists);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

module.exports.createItem = async (req, res) => {
  const { title, description, completed } = req.body;
  console.log(req.body);
  try {
    const item = await Checklist.create({
      title,
      description,
      completed,
    });
    res.status(200).json(item);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

module.exports.deleteItem = async (req, res) => {
  const { id } = req.params;

  try {
    const item = await Checklist.findByIdAndDelete(id);
    res.status(200).json(item);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

module.exports.updateItem = async (req, res) => {
  const { id } = req.params;

  try {
    const item = await Checklist.findByIdAndUpdate(id, { ...req.body });
    res.status(200).json(item);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};
