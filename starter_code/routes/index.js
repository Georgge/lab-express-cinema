const express = require('express');
const router  = express.Router();
const Movie = require('../models/Movie');
const seed = require('../bin/seeds');

/* GET home page */
router.get('/', (req, res, next) => {
  res.render('index');
});

router.get('/seed', (req, res, next) => {

  res.render('seed');
});

module.exports = router;
