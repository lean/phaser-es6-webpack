import Phaser, { Button } from 'phaser'
import { centerGameObjects } from '../../utils'
import BackButton from '../../components/BackButton'

export default class extends Phaser.State {
  init () { }
  preload () {
  }

  create () {
    this.settingsPassBg = this.add.sprite(0, 0, 'settingsPass')

    this.settingsPassButton = new Button(this.game, 551, 243, 'settingsPassButton', () => {
      this.state.start('SettingsPassScreenInput')
    })
    this.game.add.existing(this.settingsPassButton)

    BackButton.addButton(this.game, this.state, 'MainPhoneScreen', 'back')
    BackButton.addButton(this.game, this.state, 'MainPhoneScreen', 'close')
  }
}
