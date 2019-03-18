import { GameInstance } from "./GameInstance";

export class Player {
    name: string;
    id: number = -1;

    gameId: number = -1;

    /**
     * An instance of a player
     * 
     * @param { string } name - The name of the player
     */
    constructor(name: string){
        this.name = name;
    }
}