import { Board } from "./Board";
import { Player } from "./Player";
export declare class GameInstance {
    board: Board;
    players: Player[];
    name: string;
    id: number;
    hostId: number;
    /**
     * The GameInstance class is the main hub of each game. All information
     * required to opperate a game will be contained here. It needs to be
     * supplied a host and a name to be created
     *
     * @param { Player } host - The host of the game
     * @param { string } name - The name that will be displayed for people to join
     */
    constructor(host: Player, name: string, id: number);
    /**
     * This method adds the player to the game, along with configuring the player's instance to fit the games variables.
     *
     * @param { Player } player - The player to add to the game
     *
     * @return { boolean } True if successful, false otherwise
     */
    join(player: Player): boolean;
    /**
     *
     * @param { string | number } query - Either a string or number to search for
     * @returns { Player | false } returns the queried player or false if a player wasn't found
     */
    getPlayer(query: number): Player | false;
}
