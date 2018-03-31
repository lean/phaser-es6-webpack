import {Game, Sprite} from 'phaser-ce'

interface props {
  game: any,
  x: number,
  y: number,
  asset: string
};

export default class extends Sprite {
  constructor ({ game, x, y, asset } : props) {
    super(game, x, y, asset)
    this.anchor.setTo(0.5)
  }

  update () {
    this.angle += 1
  }
}
