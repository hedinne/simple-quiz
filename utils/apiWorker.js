const axios = require('axios');

function getQuestions(topic, difficulty, amount) {
  const a = amount || 10;
  const t = (topic && topic !== 'any') ? `&category=${topic}` : null;
  const d = (difficulty && difficulty !== 'any')
    ? `&difficulty=${difficulty}` : null;

  return axios.get(
    `https://www.opentdb.com/api.php?amount=${a}${t}${d}`)
      .then(res => res.data);
}

module.exports = {
  getQuestions,
};
