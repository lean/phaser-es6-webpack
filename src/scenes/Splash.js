import Phaser from 'phaser'
import { centerGameObjects } from '../utils'

export default class extends Phaser.Scene {
  constructor () {
    super({ key: 'SplashScene' })
  }

  preload () {
    //
    // load your assets
    //
    this.load.image('mushroom', 'assets/images/mushroom2.png')
  }

  create () {
    this.scene.start('GameScene')
  }
}
