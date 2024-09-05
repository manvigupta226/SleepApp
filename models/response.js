const pool = require('../config/db');

const saveResponse = async (userId, questionId, answer) => {
    const result = await pool.query(
        'INSERT INTO responses (user_id, question_id, answer) VALUES ($1, $2, $3) RETURNING *',
        [userId, questionId, answer]
    );
    return result.rows[0];
};

module.exports = { saveResponse };
