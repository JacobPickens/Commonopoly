var express = require('express');
var router = express.Router();

var Games = require('../dist/game');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { games: Games.list });
});

module.exports = router;
