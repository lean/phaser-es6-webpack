import Phaser, { Button } from 'phaser'
import { centerGameObjects } from '../../utils'
import BackButton from '../../components/BackButton'

export default class extends Phaser.State {
  init () { }
  preload () {
  }

  create () {
    this.laptopBg = this.add.sprite(this.game.world.centerX, this.game.world.centerY, 'laptopBg')
    this.laptopZoom = this.add.sprite(this.game.world.centerX, this.game.world.centerY, 'laptopZoom')
    centerGameObjects([this.laptopBg, this.laptopZoom])

    this.chromeButton = new Button(this.game, 480, 676, 'chrome', () => this.state.start('BrowserLaptopScreen'))
    this.game.add.existing(this.chromeButton)
    BackButton.addButton(this.game, this.state, 'MainPhoneScreen', 'close')
  }
}
