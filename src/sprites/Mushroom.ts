import * as Phaser from 'phaser-ce'

export default class extends Phaser.Sprite {
  constructor ({ game, x, y, asset } : {
    game: any, // Note: Phaser.Game, but cannot bind this to Phaser.Game type
    x: number,
    y: number,
    asset: string | Phaser.RenderTexture | Phaser.BitmapData 
  }) {
    super(game, x, y, asset)
    this.anchor.setTo(0.5)
  }

  update () {
    this.angle += 1
  }
}
