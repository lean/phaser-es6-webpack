import 'pixi'
import 'p2'
import Phaser from 'phaser'

import BootState from './states/Boot'
import SplashState from './states/Splash'
import GameState from './states/Game'
import mainScreen from './states/phone/mainScreen'
import settingsScreen from './states/phone/settingsScreen'
import contactsScreen from './states/phone/contactsScreen'
import mainLaptopScreen from './states/laptop/mainLaptopScreen'
import browserLaptopScreen from './states/laptop/browserLaptopScreen'
import logoutLaptopScreen from './states/laptop/logoutLaptopScreen'
import settingsPassScreen from './states/phone/settingsPassScreen'
import settingsPassScreenInput from './states/phone/settingsPassScreenInput'

import config from './config'

class Game extends Phaser.Game {
  constructor () {
    const docElement = document.documentElement
    const width = docElement.clientWidth > config.gameWidth ? config.gameWidth : docElement.clientWidth
    const height = docElement.clientHeight > config.gameHeight ? config.gameHeight : docElement.clientHeight

    super(width, height, Phaser.CANVAS, 'content', null)

    this.state.add('Boot', BootState, false)
    this.state.add('Splash', SplashState, false)
    this.state.add('Game', GameState, false)
    this.state.add('MainPhoneScreen', mainScreen, false)
    this.state.add('SettingsScreen', settingsScreen, false)
    this.state.add('ContactsScreen', contactsScreen, false)
    this.state.add('MainLaptopScreen', mainLaptopScreen, false)
    this.state.add('BrowserLaptopScreen', browserLaptopScreen, false)
    this.state.add('LogoutLaptopScreen', logoutLaptopScreen, false)
    this.state.add('SettingsPassScreen', settingsPassScreen, false)
    this.state.add('SettingsPassScreenInput', settingsPassScreenInput, false)

    // with Cordova with need to wait that the device is ready so we will call the Boot state in another file
    if (!window.cordova) {
      this.state.start('Boot')
    }
  }
}

window.game = new Game()

if (window.cordova) {
  var app = {
    initialize: function () {
      document.addEventListener(
        'deviceready',
        this.onDeviceReady.bind(this),
        false
      )
    },

    // deviceready Event Handler
    //
    onDeviceReady: function () {
      this.receivedEvent('deviceready')

      // When the device is ready, start Phaser Boot state.
      window.game.state.start('Boot')
    },

    receivedEvent: function (id) {
      console.log('Received Event: ' + id)
    }
  }

  app.initialize()
}

if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('/service-worker.js').then(registration => {
      console.log('SW registered: ', registration)
    }).catch(registrationError => {
      console.log('SW registration failed: ', registrationError)
    })
  })
}
