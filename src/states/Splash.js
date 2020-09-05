import Phaser from 'phaser'
import { centerGameObjects } from '../utils'

export default class extends Phaser.State {
  init () {}

  preload () {
    this.loaderBg = this.add.sprite(this.game.world.centerX, this.game.world.centerY, 'loaderBg')
    this.loaderBar = this.add.sprite(this.game.world.centerX, this.game.world.centerY, 'loaderBar')
    centerGameObjects([this.loaderBg, this.loaderBar])

    this.load.setPreloadSprite(this.loaderBar)
    //
    // load your assets
    //
    this.load.image('mushroom', 'assets/images/mushroom2.png')
    this.load.image('room', 'assets/images/room.png')
    this.load.image('laptop', 'assets/images/laptop.png')
    this.load.image('laptop_fade', 'assets/images/laptop_fade.png')
    this.load.image('close', 'assets/images/close-icon.png')
    this.load.image('back', 'assets/images/back-icon.png')
    this.load.image('laptopBg', './assets/images/room-bg.png')
    this.load.image('laptopBrowser', './assets/images/laptop-browser.png')
    this.load.image('logout', './assets/images/logout-button.png')
    this.load.image('roomBg', './assets/images/room-bg.png')
    this.load.image('laptopZoom', './assets/images/laptop-zoom.png')
    this.load.image('chrome', './assets/images/chrome-icon.png')
    this.load.image('veracrypt', './assets/images/veracrypt-icon.png')
    this.load.image('laptopLogout', './assets/images/laptop-vk-logout.png')
    this.load.image('logout', './assets/images/logout-button.png')
    this.load.image('contactsBg', './assets/images/contacts-bg.png')
    this.load.image('settingsBg', './assets/images/settings-bg.png')
    this.load.image('phoneBg', './assets/images/phone-bg.png')
    this.load.image('settings', './assets/images/phone-settings.png')
    this.load.image('contacts', './assets/images/phone-contacts.png')
  }

  create () {
    this.state.start('MainLaptopScreen')
  }
}
