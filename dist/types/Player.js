"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Player = /** @class */ (function () {
    /**
     * An instance of a player
     *
     * @param { string } name - The name of the player
     */
    function Player(name) {
        this.id = -1;
        this.gameId = -1;
        this.name = name;
    }
    return Player;
}());
exports.Player = Player;
