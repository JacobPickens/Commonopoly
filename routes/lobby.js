var express = require('express');
var router = express.Router();

/* GET users listing. */
router.post('/join', function(req, res, next) {
  console.log('Game join attempt ' + req.body.game);
  res.redirect('back');
});

module.exports = router;
