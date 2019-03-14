"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var GameInstance_1 = require("./types/GameInstance");
var Player_1 = require("./types/Player");
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
 * @param { number } playerId - The unique ID of the player submitting the request
 * @param { number } gameId - The unique ID of the game
 *
 * @return { GameInstance } The game
 */
function joinGame(playerId, gameId) {
    return;
}
exports.joinGame = joinGame;
/**
 * Called to join an already created GameInstance
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
var list = games;
exports.list = list;
