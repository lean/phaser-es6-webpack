import Phaser, { Button } from 'phaser'
import { centerGameObjects } from '../../utils'
import BackButton from '../../components/BackButton'

export default class extends Phaser.State {
  init () { }
  preload () {
  }

  create () {
    this.phoneBg = this.add.sprite(0, 0, 'phoneBg')

    this.settingsButton = new Button(this.game, 576, 399, 'settings', () => {
      this.state.start('SettingsScreen')
    })
    this.contactsButton = new Button(this.game, 576, 719, 'contacts', () => this.state.start('ContactsScreen'))
    this.game.add.existing(this.settingsButton)
    this.game.add.existing(this.contactsButton)

    BackButton.addButton(this.game, this.state, 'MainPhoneScreen', 'close')
  }

//   render () {
//     this.game.debug.spriteInfo(this.settingsButton, 32, 32)
//     this.game.debug.spriteInfo(this.contactsButton, 102, 102)
//   }
}
