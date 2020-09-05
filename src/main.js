import 'pixi'
import 'p2'
import Phaser from 'phaser'

import ChoiceWheelHelper from './UI/ChoiceWheelHelper'

import BootState from './states/Boot'
import SplashState from './states/Splash'
import GameState from './states/Game'
import mainScreen from './states/phone/mainScreen'
import settingsScreen from './states/phone/settingsScreen'
import contactsScreen from './states/phone/contactsScreen'


import config from './config'

class Game extends Phaser.Game {
  constructor () {
    const width = config.gameWidth
    const height = config.gameHeight

    super(width, height, Phaser.CANVAS, 'content', null)

    this.state.add('Boot', BootState, false)
    this.state.add('Splash', SplashState, false)
    this.state.add('Game', GameState, false)
    this.state.add('MainPhoneScreen', mainScreen, false)
    this.state.add('SettingsScreen', settingsScreen, false)
    this.state.add('ContactsScreen', contactsScreen, false)

    this.state.start('Boot')
  }
}

window.game = new Game()

ChoiceWheelHelper.setGame(window.game)
