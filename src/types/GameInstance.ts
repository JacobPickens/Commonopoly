import { Board } from "./Board";
import { Player } from "./Player";

export class GameInstance {
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
    constructor(host: Player, name: string, id: number) {
        this.name = name;
        this.id = id;
        this.players = [];
        this.board = new Board();
        this.hostId = host.id;

        this.join(host); // Puts the host into the game
    }

    /**
     * This method adds the player to the game, along with configuring the player's instance to fit the games variables.
     *  
     * @param { Player } player - The player to add to the game
     * 
     * @return { boolean } True if successful, false otherwise
     */
    join(player: Player): boolean {
        // Checks if player's name is already in the game
        for (let i = 0; i < this.players.length; i++) {
            if (player.name == this.players[i].name) return false;
        }

        player.gameId = this.id;
        player.id = this.players.length;
        this.players[this.players.length] = player;
        this.hostId = player.id;

        return true;
    }

    /**
     * 
     * @param { string | number } query - Either a string or number to search for
     * @returns { Player | false } returns the queried player or false if a player wasn't found
     */
    getPlayer(query: number): Player | false {
        let nan = isNaN(query);
        // Checks if player's name is already in the game
        for (let i = 0; i < this.players.length; i++) {
            if(nan && this.players[i].name == query + "") return this.players[i]; // If the query is a string
            else if(this.players[i].id == query) return this.players[i]; // If the query is a number
        }

        return false; // if nothing was found
    }

}