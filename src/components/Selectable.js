import { Sprite, Signal } from 'phaser'

export default class extends Sprite {
  constructor (game, x, y, image, options) {
    super(game, x, y, image)

    this.inputEnabled = true
    this.alpha = 0
    this.onSelect = new Signal()
    this.events.onInputDown.add(() => {
      this.onSelect.dispatch({ image, options });
      this.alpha = 0;
    }, this)
  }

  update () {
    if (this.input.pointerOver()) {
      this.alpha = 1
    } else {
      this.alpha = 0
    };
  }
}
