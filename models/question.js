const pool = require('../config/db');

const getQuestions = async () => {
    const result = await pool.query('SELECT * FROM questions');
    return result.rows;
};

module.exports = { getQuestions };
