import { Star } from './Star';
/// <reference path="../node_modules/phaser/typescript/phaser.d.ts" />

export class Starfield extends Phaser.Group {
	constructor(game: Phaser.Game) {
		super(game)

		this.enableBody = true;
		this.physicsType = Phaser.Physics.ARCADE;
		for (let i = 0; i < 50; i++) {
			this.add(new Star(game, game.world.randomX, game.world.randomY))
		}



	}

	public update() {
		this.forEachAlive((star: Star) => {
			star.update();
		}, this);
	}
}