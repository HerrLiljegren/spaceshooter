/// <reference path="../../node_modules/phaser/typescript/phaser.d.ts" />

// Our Boot class is where we define global settings for the game.
// It’s also were we preload the graphics that will be used by the actual Preloader, in this case a simple loading bar image.

	export class Boot extends Phaser.State {

		public preload() {
			// this.load.image('preloadBar', 'assets/loader.png');
		}

		create() {
			this.game.canvas.oncontextmenu = function (e) { e.preventDefault(); }

			this.game.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;

        //have the game centered horizontally
        this.scale.pageAlignHorizontally = true;
        this.scale.pageAlignVertically = true;

        //screen size will be set automatically


			this.game.state.start('Preloader', true, false);
		}
	}

