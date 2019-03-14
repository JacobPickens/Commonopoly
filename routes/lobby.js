var express = require('express');
var router = express.Router();

var Games = require('../dist/game');

// Handles the GET request to display the create-game form
router.get('/create', function(req, res, next) {
  // The error variable will be a string holding an error message for the user if need be
  let error = "";
  if(req.cookies.formError != undefined) error = req.cookies.formError
  res.cookie('formError', '', {expires: new Date(Date.now()-1)}); // This should erase the cookie

  res.render('create-game', { error });
});


// Handle the POST request for game creation. This is where the game will actually be created
router.post('/create', function(req, res, next) {
  //res.cookie('formError', 'failed', { expires: new Date(Date.now() + 60000) });
  let playerName = req.body.playerName;
  let gameName = req.body.gameName;

  if(playerName == "" || gameName == "") { // If any fields are empty, save that error and send them back
    res.cookie('formError', 'Please fill all fields.', { expires: new Date(Date.now() + 60000) });
    res.redirect('back');
    return;
  } // Data is valid, lets keep going

  let game = Games.createGame(playerName, gameName);
  if(!game) {
    res.cookie('formError', 'Game could not be created. Try a different name.', { expires: new Date(Date.now() + 60000) });
    res.redirect('back');
    return;
  }
  res.redirect('/');
});

/* GET users listing. */
router.post('/join', function(req, res, next) {
  console.log('Game join attempt ' + req.body.game);
  res.redirect('back');
});

module.exports = router;
