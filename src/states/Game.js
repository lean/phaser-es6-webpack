/* globals __DEV__ */
import Phaser from 'phaser'
import Player from '../prefabs/Player'

export default class extends Phaser.State {
  init() {}
  preload() {}

  create() {
    const GAME = this.game
    // Enable physics
    GAME.physics.startSystem(Phaser.Physics.ARCADE)

    // Set up Player
    this.player = new Player({game: GAME, x: 0, y: 0, asset: 'mushroom'})
    GAME.stage.addChild(this.player)
  }

  render() {
  }
}
