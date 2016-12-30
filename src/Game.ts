import { Level1 } from './states/Level1';
import { MainMenu } from './states/MainMenu';
import { Preloader } from './states/Preloader';
import { Boot } from './states/Boot';

/// <reference path="../node_modules/phaser/typescript/phaser.d.ts" />


	export class Game extends Phaser.Game {
		constructor() {
			super(1280, 720, Phaser.AUTO);

			this.state.add('Boot', Boot, false);
			this.state.add('Preloader', Preloader, false);
			this.state.add('MainMenu', MainMenu, false);
			this.state.add('Level1', Level1, false);

			this.state.start('Boot');
		}
	}
