"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var GameInstance_1 = require("./types/GameInstance");
var Player_1 = require("./types/Player");
var IO = require("socket.io");
// Starts socket.io
var io = IO.listen(3001);
io.sockets.on('connection', function (socket) {
    socket.emit('hello', 'world');
});
var games = [];
/**
 * Called to create a new GameInstance. The creator of the game becomes the host
 *
 * @param { string } hostName - The name of the host player
 * @param { string } gameName - The name of the game
 *
 * @return { GameInstance | false } Returns the game if successful. Otherwise, it will return false
 */
function createGame(hostName, gameName) {
    // Check if a game with the same name exists
    for (var i = 0; i < games.length; i++) {
        if (games[i].name == gameName)
            return false;
    }
    // No game exists so we can create it
    var g = new GameInstance_1.GameInstance(new Player_1.Player(hostName), gameName, games.length);
    games.push(g);
    return g;
}
exports.createGame = createGame;
/**
 * Called to join an already created GameInstance
 *
 * @param { string } playerName - The unique name of the player submitting the request
 * @param { number } gameId - The unique ID of the game
 *
 * @return { GameInstance | false } returns the game or false if the game could not be joined
 */
function joinGame(playerName, gameId) {
    var game = undefined;
    // Check if the game exists
    for (var i = 0; i < games.length; i++) {
        if (games[i].id == gameId) {
            game = games[i];
            break;
        }
    }
    if (game == undefined)
        return false;
    // Check to see if a player with that name already exists
    var exists = false;
    for (var i = 0; i < game.players.length; i++) {
        if (game.players[i].name == playerName) {
            exists = true;
            break;
        }
    }
    if (!exists)
        game.join(new Player_1.Player(playerName));
    else
        return false; // Player name exists; request failed.
    return game; // All succeeded, send joined game
}
exports.joinGame = joinGame;
/**
 * Called to start an already created GameInstance
 *
 * @param { number } playerId - The unique ID of the player submitting the request
 * @param { number } gameId - The unique ID of the game
 *
 * @return { GameInstance } The game
 */
function startGame(playerId, gameId) {
    return;
}
exports.startGame = startGame;
/**
 * Called to join an already created GameInstance
 *
 * @param { number } playerId - The unique ID of the player submitting the request
 * @param { number } gameId - The unique ID of the game
 */
function leaveGame(playerId, gameId) {
    return true;
}
exports.leaveGame = leaveGame;
/**
 * Returns a game with a matching name or ID depending on what you supply it
 *
 * @param { number | string } toFind - The name or ID of the game to find
 * @return { GameInstance | false } returns the requested game, or false if nothing is found
 */
function getGame(toFind) {
    var nan = isNaN(toFind);
    for (var i = 0; i < games.length; i++) {
        if (nan) { // If toFind is a string
            if (games[i].name == toFind + "")
                return games[i];
        }
        else { // If toFind is a number
            if (games[i].id == toFind)
                return games[i];
        }
    }
    return false; // Nothing was found
}
exports.getGame = getGame;
/**
 * Returns a boolean on whether or not a game exists
 *
 * @param { number | string } toFind - The name or ID of the game to find
 * @return { boolean } returns true if exists
 */
function exists(toFind) {
    var nan = isNaN(toFind);
    for (var i = 0; i < games.length; i++) {
        if (nan) { // If toFind is a string
            if (games[i].name == toFind + "")
                return true;
        }
        else { // If toFind is a number
            if (games[i].id == toFind)
                return true;
        }
    }
    return false; // Nothing was found
}
exports.exists = exists;
var list = games;
exports.list = list;
