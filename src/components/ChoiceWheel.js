import Phaser from 'phaser'
import { Signal } from 'phaser-ce'

const BUTTONS_MARGIN = 30

class ChoiceWheel extends Phaser.Sprite {
  constructor (game, x, y, options) {
    super(game, x, y)
    this.btnGroups = []
    this.onSelect = new Signal()
    options.forEach((option, idx) => {
      const btnGroup = game.add.group()
      btnGroup.inputEnableChildren = true
      const btnLabel = game.make.text(
        x,
        y + (idx * BUTTONS_MARGIN) + 1,
        option.title,
        {
          font: 'bold 16px Arial',
          fill: '#FFFFFF'
        }
      )
      const btnBgBmp = game.make.bitmapData(
        btnLabel.width + 18 + 20,
        btnLabel.height
      )
      btnBgBmp.ctx.fillStyle = '#000000'
      btnBgBmp.ctx.beginPath()
      btnBgBmp.ctx.moveTo(0, btnLabel.height / 2)
      btnBgBmp.ctx.lineTo(20, 0)
      btnBgBmp.ctx.lineTo(20, btnLabel.height)
      btnBgBmp.ctx.closePath()
      btnBgBmp.ctx.fill()

      btnBgBmp.ctx.beginPath()
      btnBgBmp.ctx.rect(20, 0, (btnLabel.width + 18 + 20), btnLabel.height)
      btnBgBmp.ctx.fill()
      const btnBg = game.make.sprite(
        x - 9 - 20,
        y + idx * BUTTONS_MARGIN,
        btnBgBmp
      )
      btnGroup.add(btnBg)
      btnGroup.add(btnLabel)
      btnLabel.events.onInputDown.add(() => {
        this.onSelect.dispatch(option)
      })
      game.add.existing(btnGroup)
      this.btnGroups.push(btnGroup)
    })
  }

  destroy() {
    this.btnGroups.forEach(group => group.destroy())
  }
}

export { ChoiceWheel }