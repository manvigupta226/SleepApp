const express = require('express');
const { getAssessmentQuestions, submitAssessment } = require('../controllers/assessmentController');
const router = express.Router();
const authMiddleware = require('../middlewares/authMiddleware');

router.get('/questions', authMiddleware, getAssessmentQuestions);
router.post('/submit', authMiddleware, submitAssessment);

module.exports = router;
