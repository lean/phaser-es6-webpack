import Phaser, { Button } from 'phaser'
import { centerGameObjects } from '../../utils'
import BackButton from '../../components/BackButton'

export default class extends Phaser.State {
  init () { }
  preload () {
    this.load.image('laptopBg', './assets/images/room-bg.png')
    this.load.image('laptopBrowser', './assets/images/laptop-browser.png')
    this.load.image('logout', './assets/images/logout-button.png')
  }

  create () {
    this.laptopBg = this.add.sprite(0, 0, 'laptopBg')
    this.laptopBrowser = this.add.sprite(this.game.world.centerX, this.game.world.centerY, 'laptopBrowser')
    centerGameObjects([this.laptopBrowser])

    this.logoutButton = new Button(this.game, 952, 344, 'logout', () => {
      this.game.objects.logout.push('vk')
      this.state.start('LogoutLaptopScreen')
    })
    this.game.add.existing(this.logoutButton)

    BackButton.addButton(this.game, this.state, 'Game', 'close')
  }
}
