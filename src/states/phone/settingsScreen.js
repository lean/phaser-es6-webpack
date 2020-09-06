import Phaser, { Button } from 'phaser'
import { centerGameObjects } from '../../utils'
import BackButton from '../../components/BackButton'

export default class extends Phaser.State {
  init () { }
  preload () {
  }

  create () {
    this.settingsBg = this.add.sprite(0, 0, 'settingsBg')

    this.settingsPassButton = new Button(this.game, 551, 675, 'safetyButton', () => {
      this.state.start('SettingsPassScreen')
    })
    this.game.add.existing(this.settingsPassButton)

    BackButton.addButton(this.game, this.state, 'MainPhoneScreen', 'back')
    BackButton.addButton(this.game, this.state, 'Game', 'close')
  }
}
