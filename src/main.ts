import 'pixi'
import 'p2'
import * as Phaser from 'phaser-ce'

declare global {
  interface Window { game: any; }
}
window.game = window.game || {};

import BootState from './states/Boot'
import SplashState from './states/Splash'
import GameState from './states/Game'

import config from './config'

class Game extends Phaser.Game {
  constructor () {
    const docElement = document.documentElement
    const width = docElement.clientWidth > config.gameWidth ? config.gameWidth : docElement.clientWidth
    const height = docElement.clientHeight > config.gameHeight ? config.gameHeight : docElement.clientHeight

    super(width, height, Phaser.CANVAS, 'content', null)

    this.state.add('Boot', BootState, false)
    this.state.add('Splash', SplashState, false)
    this.state.add('Game', GameState, false)

    this.state.start('Boot')
  }
}

window.game = new Game()
