var express = require('express');
var router = express.Router();

var Games = require('../dist/game');

router.get('/', function(req, res) {
  let gameID = req.cookies.game.gameID;
  let playerID = req.cookies.game.playerID;
  let game = Games.getGame(gameID);
  if(game !== false) { // Game Exists
    let player = game.getPlayer(playerID);
    console.log('game found');
    if(player !== false) {
      res.render('game-lobby', { gameID: game.id, gameName: game.name, playerData: game.players, playerName: player.name });
      return;
    }
  }
  console.log(game);
  res.render('error');
});

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

/* Render the join page */
router.get('/join', function(req, res, next) {
  console.log('Game join initiated ' + req.query.game);
  let game = Games.getGame(parseInt(req.query.game));
  if(!game) { // If the game couldn't be found, cancel and send em back
    res.redirect('back');
    return;
  }
  res.render('join-game', { gameID: game.id, gameName: game.name });
});

/* Actual game joining */
router.post('/join', function(req, res, next) {
  console.log('Game join attempt ' + req.body.gameId + " from " + req.body.playerName);
  if(!Games.exists(parseInt(req.body.gameId))) { // If the game couldn't be found, cancel and send em back
    res.redirect('back');
    return;
  }
  let game = Games.joinGame(req.body.playerName, req.body.gameId);

  console.log(game.players);

  if(game === false) { // Game join failed
    res.redirect('back');
  } else { // Game join successful
    // Save player and game ID as cookie for later
    res.cookie('game', { gameID: game.id, playerName: req.body.playerName, playerID: game.getPlayer(req.body.playerName).id }, {expires: new Date(Date.now()+2000000)});
    res.redirect('/lobby');
  }
});

module.exports = router;
