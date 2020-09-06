import 'pixi'
import 'p2'
import Phaser from 'phaser'

import BootState from './states/Boot'
import SplashState from './states/Splash'
import GameState from './states/Game'
import GameOverState from './states/GameOver'
import mainScreen from './states/phone/mainScreen'
import settingsScreen from './states/phone/settingsScreen'
import contactsScreen from './states/phone/contactsScreen'
import contactsRingingScreen from './states/phone/contactsRingingScreen'
import mainLaptopScreen from './states/laptop/mainLaptopScreen'
import browserLaptopScreen from './states/laptop/browserLaptopScreen'
import logoutLaptopScreen from './states/laptop/logoutLaptopScreen'
import settingsPassScreen from './states/phone/settingsPassScreen'
import settingsPassScreenInput from './states/phone/settingsPassScreenInput'
import ChoiceWheel from './UI/ChoiceWheelHelper'
import TimerHelper from './UI/TimerHelper'

import config from './config'

class Game extends Phaser.Game {
  constructor () {
    const docElement = document.documentElement
    const width = docElement.clientWidth > config.gameWidth ? config.gameWidth : docElement.clientWidth
    const height = docElement.clientHeight > config.gameHeight ? config.gameHeight : docElement.clientHeight

    super(width, height, Phaser.CANVAS, 'content', null)

    // Обработчик окончания таймера
    this.onTimeEnd = () => {
      console.log("Время вышло, менты вломились")
      this.state.start('GameOver')
    }

    this.state.add('Boot', BootState, false)
    this.state.add('Splash', SplashState, false)
    this.state.add('Game', GameState, false)
    this.state.add('MainPhoneScreen', mainScreen, false)
    this.state.add('SettingsScreen', settingsScreen, false)
    this.state.add('ContactsScreen', contactsScreen, false)
    this.state.add('ContactsRingingScreen', contactsRingingScreen, false)
    this.state.add('MainLaptopScreen', mainLaptopScreen, false)
    this.state.add('BrowserLaptopScreen', browserLaptopScreen, false)
    this.state.add('LogoutLaptopScreen', logoutLaptopScreen, false)
    this.state.add('SettingsPassScreen', settingsPassScreen, false)
    this.state.add('SettingsPassScreenInput', settingsPassScreenInput, false)
    this.state.add('GameOver', GameOverState, false)

    this.state.start('Boot')
  }
}

window.game = new Game()
ChoiceWheel.setGame(window.game)
TimerHelper.setGame(window.game)
