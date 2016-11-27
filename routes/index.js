const express = require('express');
const api = require('../utils/apiWorker.js');
const he = require('he');

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
    [17, 'Science & Nature'],
    [23, 'History'],
    [25, 'Art'],
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
      const dataz = response.results;
      for (const item of dataz) { //eslint-disable-line
        item.question = he.decode(item.question);
        for (let ans of item.incorrect_answers) { //eslint-disable-line
          ans = he.decode(ans);
        }
      }
      res.render('quiz', {
        info: strings,
        data: dataz,
      });
    })
    .catch((error) => {
      res.render('quiz', {
        data: error,
        info: strings,
      });
    });
});

// router.post('/play', (req, res) => {
//   api.getQuestions(req.body.topic, req.body.difficulty, 10)
//     .then((response) => {
//       res.render('quiz', {
//         info: strings,
//         data: response,
//       });
//     })
//     .catch((error) => {
//       res.render('quiz', {
//         data: error,
//         info: strings,
//       });
//     });
// });

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
