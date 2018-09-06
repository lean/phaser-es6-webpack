import Phaser from 'phaser'

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

  update () {}
}
