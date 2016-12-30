/// <reference path="../../node_modules/phaser/typescript/phaser.d.ts" />


export class Preloader extends Phaser.State {

	private preloadBar: Phaser.Sprite;

	public preload() {
		//  Set-up our preloader sprite
		this.preloadBar = this.add.sprite(200, 250, 'preloadBar');
		this.load.setPreloadSprite(this.preloadBar);

		// Load actual game assets in here
		// this.game.load.spritesheet('ship', 'assets/ship.png', 201, 265, 200);
		// this.game.load.image('star', 'assets/star.png');
		// this.game.load.image('shot1', 'assets/shot1.png');
		// this.game.load.image('shot2', 'assets/shot2.png');

		 this.load.atlasXML("spritesheet", "assets/sheet.png", "assets/sheet.xml");
		 this.game.physics.startSystem(Phaser.Physics.P2JS);
	}

	create() {
		var tween = this.add.tween(this.preloadBar).to({ alpha: 0 }, 1, Phaser.Easing.Linear.None, true);
		tween.onComplete.add(this.startMainMenu, this);
	}

	startMainMenu() {
		this.game.state.start('Level1', true, false);
	}
}
