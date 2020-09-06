import { Sprite, Signal } from 'phaser'

export default class extends Sprite {
  constructor (game, x, y, image, options, disabledTexture) {
    super(game, x, y, image)

    this.inputEnabled = true
    this.disabledTexture = disabledTexture
    this.isSoftDisabled = false;

    this.alpha = 0
    this.onSelect = new Signal()
    this.events.onInputDown.add(() => {
      this.onSelect.dispatch({ image, options });
      this.alpha = 0;
    }, this)
  }

  softDisable () {
    this.inputEnabled = false
    this.loadTexture('room-object-disabled')
    this.scale.setTo(0.25)
    this.alpha = 1
    this.isSoftDisabled = true;
  }

  update () {
    if (this.isSoftDisabled) {
      this.alpha = 1
    } else {
      if (this.input.pointerOver()) {
        this.alpha = 1
      } else {
        this.alpha = 0
      };
    }
  }
}
