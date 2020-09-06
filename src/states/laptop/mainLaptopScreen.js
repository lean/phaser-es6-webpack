import Phaser, { Button } from 'phaser'
import Selectable from '../../components/Selectable'
import VisualTimer from '../../components/VisualTimer/VisualTimer'
import { centerGameObjects } from '../../utils'
import BackButton from '../../components/BackButton'
import ChoiceWheel from '../../UI/ChoiceWheelHelper'

export default class extends Phaser.State {
  init () { }
  preload () {
  }

  create () {
    this.laptopBg = this.add.sprite(0, 0, 'laptopBg')
    this.laptopZoom = this.add.sprite(this.game.world.centerX, this.game.world.centerY, 'laptopZoom')
    centerGameObjects([this.laptopZoom])

    this.chromeButton = new Button(this.game, 480, 676, 'chrome', () => {
      this.game.objects.isLogout('vk') ? this.state.start('LogoutLaptopScreen') : this.state.start('BrowserLaptopScreen')
    })

    let indicator

    if (this.game.objects.isCrypting) {
      indicator = new VisualTimer({
        game: this.game,
        x: 680,
        y: 670,
        seconds: this.game.objects.cryptoTimer,
        onComplete: () => {
          console.log('finished')
        }
      })
      indicator.start()
    }

    this.veracrypt = new Selectable(this.game, 699, 678, 'veracrypt')
    this.game.add.existing(this.veracrypt)
    this.veracrypt.onSelect.add(
      (props) => ChoiceWheel.openAt(
        this.veracrypt.x + 100,
        this.veracrypt.y + 50,
        [
          { title: 'зашифровать компьютер',
            action: () => {
              // in create
              this.game.objects.crypted.push('laptop')
              indicator = new VisualTimer({
                game: this.game,
                x: 680,
                y: 670,
                seconds: 1500,
                onComplete: () => {
                  this.game.objects.isCrypting = false
                }
              })
              indicator.start()
              this.game.objects.isCrypting = true
            }}
        ],
        'rtl'
      ).then((option) => {
        option.action()
        this.hide()
      }
      )
    )
    this.game.add.existing(this.chromeButton)
    BackButton.addButton(this.game, this.state, 'Game', 'close', () => { this.game.objects.cryptoTimer = indicator.remainingTime() })
  }
}
