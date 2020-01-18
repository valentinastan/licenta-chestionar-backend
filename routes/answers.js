const express = require('express');
const router = express.Router();

const answerController = require('../controllers/answer.js');

router.post('/api/questionnaire', answerController.create)

module.exports = router