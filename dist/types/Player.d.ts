import { GameInstance } from "./GameInstance";
export declare class Player {
    name: string;
    id: number;
    game: GameInstance | null;
    /**
     * An instance of a player
     *
     * @param { string } name - The name of the player
     */
    constructor(name: string);
}
