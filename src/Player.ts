/// <reference path="../node_modules/phaser/typescript/phaser.d.ts" />


export class Player extends Phaser.Sprite {

	private isTurningLeft: boolean;
	private isTurningRight: boolean;
	private weapon: Phaser.Weapon;

	constructor(game: Phaser.Game, x: number, y: number) {
		super(game, x, y, 'spritesheet', 'playerShip3_red.png');

		this.anchor.setTo(0.5, 0);
		this.scale.setTo(0.5);
		this.game.physics.p2.enable(this);



		this.weapon = game.add.weapon(30, 'spritesheet', 'laserBlue03.png');
		this.weapon.bulletKillType = Phaser.Weapon.KILL_WORLD_BOUNDS;
		this.weapon.bulletAngleOffset = Phaser.ANGLE_DOWN;
		this.weapon.bulletSpeed = 900;
		this.weapon.fireRate = 240;
		this.weapon.bulletAngleVariance = 5 ;
		this.weapon.trackSprite(this, 0, 0);
		this.weapon.bullets.forEach((b: Phaser.Bullet) => {
			b.scale.setTo(0.5);
			b.body.updateBounds();
		}, this)

		game.add.existing(this);

	}

	update() {
		this.body.setZeroVelocity();
		if (this.game.input.keyboard.isDown(Phaser.Keyboard.SPACEBAR)) {
			this.weapon.fire();
		}
		if (this.game.input.keyboard.isDown(Phaser.Keyboard.LEFT)) {
			this.body.moveLeft(400);
		} else if (this.game.input.keyboard.isDown(Phaser.Keyboard.RIGHT)) {
			this.body.moveRight(400);
		} else {
		}

		if (this.game.input.keyboard.isDown(Phaser.Keyboard.UP)) {
			this.body.moveUp(400);
		} else if (this.game.input.keyboard.isDown(Phaser.Keyboard.DOWN)) {
			this.body.moveDown(400);
		}

		if (this.x < 100) { this.body.x = 100; }
		if (this.x > this.game.width - 100) { this.body.x = this.game.width - 100; }
		if (this.y < 100) { this.body.y = 100; }
		if (this.y > this.game.height - 100) { this.body.y = this.game.height - 100; }
	}
}
