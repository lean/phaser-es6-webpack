import Phaser, { Button } from 'phaser'
import { centerGameObjects } from '../../utils'
import BackButton from '../../components/BackButton'

export default class extends Phaser.State {
  init () { }
  preload () {
  }

  create () {
    this.laptopBg = this.add.sprite(0, 0, 'laptopBg')
    this.laptopBrowser = this.add.sprite(this.game.world.centerX, this.game.world.centerY, 'laptopLogout')
    centerGameObjects([this.laptopBrowser])

    BackButton.addButton(this.game, this.state, 'MainPhoneScreen', 'close')
  }
}
