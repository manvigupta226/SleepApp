const { getQuestions } = require('../models/question');
const { saveResponse } = require('../models/response');

const getAssessmentQuestions = async (req, res) => {
    try {
        const questions = await getQuestions();
        res.json({ questions });
    } catch (error) {
        res.status(500).json({ error: 'Failed to retrieve questions' });
    }
};

const submitAssessment = async (req, res) => {
    const { user_id, answers } = req.body;
    try {
        await Promise.all(answers.map(answer =>
            saveResponse(user_id, answer.question_id, answer.answer)
        ));
        res.json({ message: 'Assessment submitted successfully', recommendations: ["Try to get 8 hours of sleep per night", "Practice deep breathing exercises"] });
    } catch (error) {
        res.status(500).json({ error: 'Failed to submit assessment' });
    }
};

module.exports = { getAssessmentQuestions, submitAssessment };
