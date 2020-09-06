import Phaser from 'phaser'
import WebFont from 'webfontloader'
import config from '../config';

export default class extends Phaser.State {
  init() {
    this.stage.backgroundColor = '#808080'
    this.fontsReady = false
    this.fontsLoaded = this.fontsLoaded.bind(this)

    this.game.objects = {};
    this.game.objects.dropped = [];
    this.game.objects.inTrash = [];
    this.game.objects.broken = [];

    this.game.objects.isDropped = (name) => this.game.objects.dropped.includes(name);
    this.game.objects.isInTrash = (name) => this.game.objects.inTrash.includes(name);
    this.game.objects.isBroken = (name) => this.game.objects.broken.includes(name);

    this.game.objects.isUnavaliable = (name) => this.game.objects.isDropped(name) || this.game.objects.isInTrash(name) || this.game.objects.isBroken(name);
  }

  preload() {
    if (config.webfonts.length) {
      WebFont.load({
        google: {
          families: config.webfonts
        },
        active: this.fontsLoaded
      })
    }

    let text = this.add.text(this.world.centerX, this.world.centerY, 'loading fonts', { font: '16px Arial', fill: '#dddddd', align: 'center' })
    text.anchor.setTo(0.5, 0.5)

    this.load.image('loaderBg', './assets/images/loader-bg.png')
    this.load.image('loaderBar', './assets/images/loader-bar.png')
  }

  render() {
    if (config.webfonts.length && this.fontsReady) {
      this.state.start('Splash')
    }
    if (!config.webfonts.length) {
      this.state.start('Splash')
    }
  }

  fontsLoaded() {
    this.fontsReady = true
  }
}
