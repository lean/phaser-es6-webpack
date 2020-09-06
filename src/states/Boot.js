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
    this.game.objects.rings = [];
    this.game.objects.crypted = [];
    this.game.objects.logout = [];
    this.game.objects.deleted = [];
    this.game.objects.isCrypting = false;
    this.game.objects.cryptoTimer = 0;

    this.game.objects.isDropped = (name) => this.game.objects.dropped.includes(name);
    this.game.objects.isInTrash = (name) => this.game.objects.inTrash.includes(name);
    this.game.objects.isBroken = (name) => this.game.objects.broken.includes(name);
    this.game.objects.isPhoned = (name) => this.game.objects.rings.includes(name);
    this.game.objects.isCrypted = (name) => this.game.objects.crypted.includes(name);
    this.game.objects.isLogout = (name) => this.game.objects.logout.includes(name);
    this.game.objects.isDeleted = (name) => this.game.objects.deleted.includes(name);

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
