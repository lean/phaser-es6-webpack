import { Sprite } from 'phaser'
import ChoiceWheel from '../UI/ChoiceWheelHelper'

export default class extends Sprite {
  constructor (game, x, y, asset) {
    super(game, x, y, 'room')

    this.tint = 0x000000
    this.alpha = 0
    this.inputEnabled = false
  }

  show({ image, options }) {
    this.inputEnabled = true
    this.alpha = 0.5
    this.innerImage = this.game.make.sprite(
      this.game.world.centerX,
      this.game.world.centerY,
      image,
    )
    this.innerImage.scale.setTo(2, 2);
    this.innerImage.anchor.setTo(0.5);
    this.game.add.existing(this.innerImage);

    ChoiceWheel.openAt(
      this.game.world.centerX + 100,
      this.game.world.centerY,
      [
        { title: 'one' },
        { title: 'two' },
        { title: 'three' },
      ],
    ).then(() => this.hide())

  }

  hide() {
    this.alpha = 0
    this.innerImage.destroy()
    this.inputEnabled = false
  }
}
