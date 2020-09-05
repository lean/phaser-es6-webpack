import Phaser, { Button } from 'phaser'
import { centerGameObjects } from '../../utils'
import BackButton from '../../components/BackButton'

export default class extends Phaser.State {
  init () { }
  preload () {
    this.load.image('laptopBg', './assets/images/room-bg.png')
    this.load.image('laptopZoom', './assets/images/laptop-zoom.png')
    this.load.image('chrome', './assets/images/chrome-icon.png')
    this.load.image('veracrypt', './assets/images/veracrypt-icon.png')
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
