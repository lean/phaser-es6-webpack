import Phaser from 'phaser'
import { centerGameObjects } from '../../utils'
import BackButton from '../../components/BackButton'

export default class extends Phaser.State {
  init () { }
  preload () {
    this.load.image('contactsBg', './assets/images/contacts-bg.png')
  }

  create () {
    this.contactsBg = this.add.sprite(this.game.world.centerX, this.game.world.centerY, 'contactsBg')
    centerGameObjects([this.settingsBg])
    BackButton.addButton(this.game, this.state, 'MainPhoneScreen', 'back')
    BackButton.addButton(this.game, this.state, 'MainPhoneScreen', 'close')
  }
}
