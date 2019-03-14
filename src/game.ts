import { GameInstance } from "./types/GameInstance";
import { Player } from "./types/Player";

let games: GameInstance[] = [];

/**
 * Called to create a new GameInstance. The creator of the game becomes the host
 * 
 * @param { string } hostName - The name of the host player
 * @param { string } gameName - The name of the game
 * 
 * @return { GameInstance | false } Returns the game if successful. Otherwise, it will return false
 */
function createGame(hostName: string, gameName: string): GameInstance | false {
    // Check if a game with the same name exists
    for(let i = 0; i < games.length; i++) {
        if(games[i].name == gameName) return false;
    }
    // No game exists so we can create it
    let g = new GameInstance(new Player(hostName), gameName, games.length);
    games.push(g);

    return g;
}

/**
 * Called to join an already created GameInstance
 * 
 * @param { number } playerId - The unique ID of the player submitting the request
 * @param { number } gameId - The unique ID of the game
 * 
 * @return { GameInstance } The game
 */
function joinGame(playerId: number, gameId: number): void {
    return;
}

/**
 * Called to join an already created GameInstance
 * 
 * @param { number } playerId - The unique ID of the player submitting the request
 * @param { number } gameId - The unique ID of the game
 * 
 * @return { GameInstance } The game
 */
function startGame(playerId: number, gameId: number): void {
    return;
}

/**
 * Called to join an already created GameInstance
 * 
 * @param { number } playerId - The unique ID of the player submitting the request
 * @param { number } gameId - The unique ID of the game
 */
function leaveGame(playerId: number, gameId: number) {
    return true;
}

let list = games;
export {
    list,
    createGame,
    joinGame,
    startGame,
    leaveGame
}