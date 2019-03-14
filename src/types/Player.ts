import { GameInstance } from "./GameInstance";

export class Player {
    name: string;
    id: number = -1;

    game: GameInstance | null = null;

    /**
     * An instance of a player
     * 
     * @param { string } name - The name of the player
     */
    constructor(name: string){
        this.name = name;
    }
}