import Phaser, { Button } from 'phaser'
import BackButton from '../../components/BackButton'

export default class extends Phaser.State {
  init () { }
  preload () {
  }

  create () {
    this.settingsPassBg = this.add.sprite(0, 0, 'settingsPassInput')

    BackButton.addButton(this.game, this.state, 'MainPhoneScreen', 'back')
    BackButton.addButton(this.game, this.state, 'MainPhoneScreen', 'close')
  }
}
