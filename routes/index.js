const express = require('express');
const api = require('../utils/apiWorker.js');

const router = express.Router();

const strings = {
  title: 'SimpleQuiz',
  topics: [
    [0, 'Any Category'],
    [9, 'General Knowledge'],
    [11, 'Movies'],
    [12, 'Music'],
    [14, 'TV'],
    [18, 'Computers'],
  ],
  difficulty: [
    [0, 'Any'],
    ['easy', 'Easy'],
    ['medium', 'Medium'],
    ['hard', 'Hard'],
  ],
};

router.get('/', (req, res, next) => {
  res.render('index', { info: strings });
});


router.post('/play', (req, res) => {
  api.getQuestions(req.body.topic, req.body.difficulty, 10)
    .then((response) => {
      res.render('quiz', {
        info: strings,
        data: response,
      });
    })
    .catch((error) => {
      res.render('quiz', {
        data: error,
        info: strings,
      });
    });
});

router.post('/score', (req, res, next) => {
  let count = 0;

  Object.keys(req.body).map((i) => {
    if (req.body[i] === 'c') {
      count += 1;
    }
    return count;
  });
  res.render('score', {
    info: strings,
    data: count,
  });
});

module.exports = router;
