import { Sprite } from 'phaser'

export default class extends Sprite {
  constructor (game, x, y, asset) {
    super(game, x, y, 'room')

    this.tint = 0x000000
    this.alpha = 0
  }

  show() {
    this.alpha = 0.5
  }

  hide() {
    this.alpha = 0
  }
}
