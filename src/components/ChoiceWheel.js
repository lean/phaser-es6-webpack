import Phaser from 'phaser'
import { Signal } from 'phaser-ce'

const BUTTONS_MARGIN = 30
const BUTTONS_HORIZONTAL_PADDING = 18
const TRIANGLE_WIDTH = 20

class ChoiceWheel extends Phaser.Sprite {
  constructor (game, x, y, options, position) {
    super(game, x, y)
    this.btnGroups = []
    this.onSelect = new Signal()
    let ltr = x > game.width / 2

    if (position) {
      ltr = position === 'ltr'
    }

    options.forEach((option, idx) => {
      if(!ltr) {
        const xAdjusted = x + TRIANGLE_WIDTH + BUTTONS_HORIZONTAL_PADDING / 2,
              yAdjusted = y - ((25 + 3) * options.length / 2)
        const btnGroup = game.add.group()
        btnGroup.inputEnableChildren = true
        const btnLabel = game.make.text(
          xAdjusted,
          yAdjusted + (idx * BUTTONS_MARGIN) + 1,
          option.title,
          {
            font: 'bold 16px Arial',
            fill: '#FFFFFF'
          }
        )
        const btnBgBmp = game.make.bitmapData(
          btnLabel.width + BUTTONS_HORIZONTAL_PADDING + TRIANGLE_WIDTH,
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
        btnBgBmp.ctx.rect(TRIANGLE_WIDTH, 0, (btnLabel.width + BUTTONS_HORIZONTAL_PADDING + TRIANGLE_WIDTH), btnLabel.height)
        btnBgBmp.ctx.fill()
        const btnBg = game.make.sprite(
          xAdjusted - 9 - TRIANGLE_WIDTH,
          yAdjusted + idx * BUTTONS_MARGIN,
          btnBgBmp
        )
        btnGroup.add(btnBg)
        btnGroup.add(btnLabel)
        btnLabel.events.onInputDown.add(() => {
          this.onSelect.dispatch(option)
        })
        game.add.existing(btnGroup)
        this.btnGroups.push(btnGroup)
      } else {
        const xAdjusted = x,
              yAdjusted = y - ((25 + 3) * options.length / 2)
        const btnGroup = game.add.group()
        btnGroup.inputEnableChildren = true
        const btnLabel = game.make.text(
          xAdjusted + BUTTONS_HORIZONTAL_PADDING / 2,
          yAdjusted + (idx * BUTTONS_MARGIN) + 1,
          option.title,
          {
            font: 'bold 16px Arial',
            fill: '#FFFFFF'
          }
        )
        const btnBgBmp = game.make.bitmapData(
          btnLabel.width + BUTTONS_HORIZONTAL_PADDING + TRIANGLE_WIDTH,
          btnLabel.height
        )
        btnBgBmp.ctx.fillStyle = '#000000'
        btnBgBmp.ctx.beginPath()
        btnBgBmp.ctx.moveTo(btnLabel.width + BUTTONS_HORIZONTAL_PADDING + TRIANGLE_WIDTH, btnLabel.height / 2)
        btnBgBmp.ctx.lineTo(btnLabel.width + BUTTONS_HORIZONTAL_PADDING, 0)
        btnBgBmp.ctx.lineTo(btnLabel.width + BUTTONS_HORIZONTAL_PADDING, btnLabel.height)
        btnBgBmp.ctx.closePath()
        btnBgBmp.ctx.fill()

        btnBgBmp.ctx.beginPath()
        btnBgBmp.ctx.rect(0, 0, (btnLabel.width + BUTTONS_HORIZONTAL_PADDING), btnLabel.height)
        btnBgBmp.ctx.fill()
        const btnBg = game.make.sprite(
          xAdjusted,
          yAdjusted + idx * BUTTONS_MARGIN,
          btnBgBmp
        )
        btnGroup.add(btnBg)
        btnGroup.add(btnLabel)
        btnLabel.events.onInputDown.add(() => {
          this.onSelect.dispatch(option)
        })
        game.add.existing(btnGroup)
        this.btnGroups.push(btnGroup)
      }
    })
  }

  destroy() {
    this.btnGroups.forEach(group => group.destroy())
  }
}

export { ChoiceWheel }