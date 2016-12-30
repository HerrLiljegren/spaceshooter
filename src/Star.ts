/// <reference path="../node_modules/phaser/typescript/phaser.d.ts" />

export class Star extends Phaser.Sprite {

	constructor(game: Phaser.Game, x: number, y: number) {
		let s = game.rnd.integerInRange(1, 2);
		super(game, x, y, 'spritesheet', `star${s}.png`);

		this.anchor.setTo(0.5);
		game.add.existing(this);
		this.randomScale();
		this.randomAlpha();
	}
	public preload() {

	}
	public create() {

	}

	public update() {
		this.y += 20 * this.scale.x;

		if (this.y > this.game.height) {
			this.y = -10;
			this.x = this.game.world.randomX;
			this.randomScale();
			this.randomAlpha();
		}
	}

	public render() {

	}

	private randomScale() {
		this.scale.setTo(this.game.rnd.realInRange(0.25, 0.5));
	}

	private randomAlpha(){
		this.alpha = this.scale.x * this.game.rnd.realInRange(0.75, 1) + 0.2;

	}
}