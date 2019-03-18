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
 * @param { string } playerName - The unique name of the player submitting the request
 * @param { number } gameId - The unique ID of the game
 *
 * @return { GameInstance | false } returns the game or false if the game could not be joined
 */
declare function joinGame(playerName: string, gameId: number): GameInstance | false;
/**
 * Called to start an already created GameInstance
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
/**
 * Returns a game with a matching name or ID depending on what you supply it
 *
 * @param { number | string } toFind - The name or ID of the game to find
 * @return { GameInstance | false } returns the requested game, or false if nothing is found
 */
declare function getGame(toFind: number): GameInstance | false;
/**
 * Returns a boolean on whether or not a game exists
 *
 * @param { number | string } toFind - The name or ID of the game to find
 * @return { boolean } returns true if exists
 */
declare function exists(toFind: number): boolean;
declare let list: GameInstance[];
export { list, createGame, joinGame, startGame, leaveGame, getGame, exists };
