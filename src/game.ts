import { GameInstance } from "./types/GameInstance";

let games: GameInstance[] = [];

/**
 * Called to create a new GameInstance. The creator of the game becomes the host
 * 
 * @param { number } playerId - The unique ID of the player submitting the request
 */
function makeGame(playerId: number): boolean {
    return true;
}

/**
 * Called to join an already created GameInstance
 * 
 * @param { number } playerId - The unique ID of the player submitting the request
 * @param { number } gameId - The unique ID of the game
 */
function joinGame(playerId: number, gameId: number): boolean {
    return true;
}

/**
 * Called to join an already created GameInstance
 * 
 * @param { number } playerId - The unique ID of the player submitting the request
 * @param { number } gameId - The unique ID of the game
 */
function startGame(playerId: number, gameId: number): boolean {
    return true;
}

/**
 * Called to join an already created GameInstance
 * 
 * @param { number } playerId - The unique ID of the player submitting the request
 * @param { number } gameId - The unique ID of the game
 */
function leaveGame(playerId: number, gameId: number): boolean {
    return true;
}

module.exports = {
    games: games,
    makeGame: makeGame,
    joinGame: joinGame,
    startGame: startGame,
    leaveGame: leaveGame
};