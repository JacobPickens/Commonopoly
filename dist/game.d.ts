import { GameInstance } from "./types/GameInstance";
/**
 * Called to create a new GameInstance. The creator of the game becomes the host
 *
 * @param { string } hostName - The name of the host player
 * @param { string } gameName - The name of the game
 *
 * @return { GameInstance | false } Returns the game if successful. Otherwise, it will return false
 */
declare function createGame(hostName: string, gameName: string): GameInstance | false;
/**
 * Called to join an already created GameInstance
 *
 * @param { number } playerId - The unique ID of the player submitting the request
 * @param { number } gameId - The unique ID of the game
 *
 * @return { GameInstance } The game
 */
declare function joinGame(playerId: number, gameId: number): void;
/**
 * Called to join an already created GameInstance
 *
 * @param { number } playerId - The unique ID of the player submitting the request
 * @param { number } gameId - The unique ID of the game
 *
 * @return { GameInstance } The game
 */
declare function startGame(playerId: number, gameId: number): void;
/**
 * Called to join an already created GameInstance
 *
 * @param { number } playerId - The unique ID of the player submitting the request
 * @param { number } gameId - The unique ID of the game
 */
declare function leaveGame(playerId: number, gameId: number): boolean;
declare let list: GameInstance[];
export { list, createGame, joinGame, startGame, leaveGame };
