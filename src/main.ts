import 'pixi';
import 'p2';
import * as Phaser from 'phaser-ce';
import { BootState } from './states/Boot';
import { SplashState } from './states/Splash';
import { GameState } from './states/Game';

import { Config } from './config';

class Game extends Phaser.Game {
  constructor () {
    const config = new Config();
    const docElement = document.documentElement;
    const width = docElement.clientWidth > config.gameWidth ? config.gameWidth : docElement.clientWidth;
    const height = docElement.clientHeight > config.gameHeight ? config.gameHeight : docElement.clientHeight;

    super(width, height, Phaser.CANVAS, 'content', null);

    this.state.add('Boot', BootState, false);
    this.state.add('Splash', SplashState, false);
    this.state.add('Game', GameState, false);

    this.state.start('Boot');
  }
}

(window as any).game = new Game();
