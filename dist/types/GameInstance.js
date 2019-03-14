"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Board_1 = require("./Board");
var GameInstance = /** @class */ (function () {
    /**
     * The GameInstance class is the main hub of each game. All information
     * required to opperate a game will be contained here. It needs to be
     * supplied a host and a name to be created
     *
     * @param { Player } host - The host of the game
     * @param { string } name - The name that will be displayed for people to join
     */
    function GameInstance(host, name, id) {
        this.name = name;
        this.id = id;
        this.players = [];
        this.board = new Board_1.Board();
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
    GameInstance.prototype.join = function (player) {
        // Checks if player's name is already in the game
        for (var i = 0; i < this.players.length; i++) {
            if (player.name == this.players[i].name)
                return false;
        }
        player.game = this;
        player.id = this.players.length;
        this.players.push(player);
        return true;
    };
    return GameInstance;
}());
exports.GameInstance = GameInstance;
