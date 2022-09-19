const express = require("express");
const router = express.Router();
const checklistController = require('../controllers/checklistController');

router.route('/checklist').get(checklistController.index)

module.exports = router;