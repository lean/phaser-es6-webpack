import Phaser, { Button } from 'phaser'
import { centerGameObjects } from '../../utils'
import BackButton from '../../components/BackButton'

export default class extends Phaser.State {
  init () { }
  preload () {
    this.load.image('phoneBg', './assets/images/phone-bg.png')
    this.load.image('settings', './assets/images/phone-settings.png')
    this.load.image('contacts', './assets/images/phone-contacts.png')
  }

  create () {
    this.phoneBg = this.add.sprite(this.game.world.centerX, this.game.world.centerY, 'phoneBg')
    centerGameObjects([this.phoneBg])

    this.settingsButton = new Button(this.game, 576, 380, 'settings', () => {
      this.state.start('SettingsScreen')
    //   this.game.camera.fade(0x000000, 19449595500)
    //   this.game.camera.onFadeComplete.add(this.state.start('SettingsScreen'), this)
    })
    this.contactsButton = new Button(this.game, 576, 700, 'contacts', () => this.state.start('ContactsScreen'))
    this.game.add.existing(this.settingsButton)
    this.game.add.existing(this.contactsButton)
    BackButton.closeButton(this.game, this.state, 'MainPhoneScreen')
    BackButton.prevButton(this.game, this.state, 'MainPhoneScreen')
  }
}
