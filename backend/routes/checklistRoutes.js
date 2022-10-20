const express = require("express");
const router = express.Router();
const checklistController = require("../controllers/checklistController");

router
  .route("/checklist")
  .get(checklistController.index)
  .post(checklistController.createItem);

router
  .route("/checklist/:id")
  .get(checklistController.details)
  .delete(checklistController.deleteItem)
  .patch(checklistController.updateItem);

module.exports = router;
