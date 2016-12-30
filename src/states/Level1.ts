import { Starfield } from './../Starfield';
import { Player } from './../Player';
/// <reference path="../../node_modules/phaser/typescript/phaser.d.ts" />

export class Level1 extends Phaser.State {
	player: Player;
	starfield: Starfield;
	public preload() {

	}

	public create() {
		this.starfield = new Starfield(this.game);
		this.player = new Player(this.game, this.game.width / 2, this.game.height - 200);

	}
}
