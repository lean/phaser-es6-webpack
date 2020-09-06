import Phaser from 'phaser'
import { centerGameObjects } from '../utils'
import TimerHelper from '../UI/TimerHelper';

export default class extends Phaser.State {
  init () {}

  preload () {
    this.loaderBg = this.add.sprite(this.game.world.centerX, this.game.world.centerY, 'loaderBg')
    this.loaderBar = this.add.sprite(this.game.world.centerX, this.game.world.centerY, 'loaderBar')
    centerGameObjects([this.loaderBg, this.loaderBar])

    this.load.setPreloadSprite(this.loaderBar)
    //
    // load your assets
    //
    this.load.image('mushroom', 'assets/images/mushroom2.png')
    this.load.image('room', 'assets/images/room.png')
    this.load.image('room-laptop', 'assets/images/room-laptop.png')
    this.load.image('room-laptop-fade', 'assets/images/room-laptop-fade-2.png')
    this.load.image('room-laptop-zoom', 'assets/images/room-laptop-zoom.png')
    this.load.image('room-phone', 'assets/images/room-phone.png')
    this.load.image('room-phone-fade', 'assets/images/room-phone-fade.png')
    this.load.image('room-phone-zoom', 'assets/images/room-phone-zoom.png')
    this.load.image('room-flag', 'assets/images/room-flag.png')
    this.load.image('room-flag-fade', 'assets/images/room-flag-fade.png')
    this.load.image('room-flag-zoom', 'assets/images/room-flag-zoom.png')
    this.load.image('room-calendar', 'assets/images/room-calendar.png')
    this.load.image('room-calendar-fade', 'assets/images/room-calendar-fade.png')
    this.load.image('room-calendar-zoom', 'assets/images/room-calendar-zoom.png')
    this.load.image('room-sticker', 'assets/images/room-sticker.png')
    this.load.image('room-sticker-fade', 'assets/images/room-sticker.png')
    this.load.image('room-sticker-zoom', 'assets/images/room-sticker-zoom.png')
    this.load.image('close', 'assets/images/close-icon.png')
    this.load.image('back', 'assets/images/back-icon.png')
    this.load.image('laptopBg', './assets/images/room-bg.png')
    this.load.image('laptopBrowser', './assets/images/laptop-browser.png')
    this.load.image('logout', './assets/images/logout-button.png')
    this.load.image('roomBg', './assets/images/room-bg.png')
    this.load.image('laptopZoom', './assets/images/laptop-zoom.png')
    this.load.image('chrome', './assets/images/chrome-icon.png')
    this.load.image('veracrypt', './assets/images/veracrypt-icon.png')
    this.load.image('laptopLogout', './assets/images/laptop-vk-logout.png')
    this.load.image('logout', './assets/images/logout-button.png')
    this.load.image('contactsBg', './assets/images/contacts-bg.png')
    this.load.image('settingsBg', './assets/images/settings-bg.png')
    this.load.image('phoneBg', './assets/images/phone-bg.png')
    this.load.image('settings', './assets/images/phone-settings.png')
    this.load.image('contacts', './assets/images/phone-contacts.png')
    this.load.image('contactsBg', './assets/images/contacts-bg.png')
    this.load.image('contactsRinging', './assets/images/contacts-ringing.png')
    this.load.image('settingsPassButton', './assets/images/settings-pass-button.png')
    this.load.image('settingsPass', './assets/images/setting-pass-1.png')
    this.load.image('settingsPassInput', './assets/images/settings-pass-2.png')
    this.load.image('safetyButton', './assets/images/safety-button.png')
    this.load.image('room-object-disabled', 'assets/images/disabled.png')
    this.load.image('ringMomButton', './assets/images/ringMomButton.png')
    this.load.image('ringAdvButton', './assets/images/ringAdvButton.png')
    this.load.image('bootscreen', './assets/images/bootscreen.png')
    this.load.image('bootscreen-title', './assets/images/bootscreen-title.png')
    this.load.image('bootscreen-text', './assets/images/bootscreen-text.png')
    this.load.image('button-game-start', './assets/images/button-game-start.png')
    this.load.image('fire', './assets/images/fire.png')
    this.load.image('room-trash', './assets/images/room-trash.png')
    this.load.image('room-trash-zoom', './assets/images/room-trash-zoom.png')
    this.load.spritesheet('timer', './assets/images/timer.png', 150, 20)
  }

  create () {
    const bg = new Phaser.Sprite(this.game, 0, 0, 'bootscreen');
    this.game.add.existing(bg);

    const title = new Phaser.Sprite(this.game, 200, 75, 'bootscreen-title');
    this.game.add.existing(title);

    const text = new Phaser.Sprite(this.game, 200, 200, 'bootscreen-text');
    this.game.add.existing(text);

    this.game.add.button(
      200,
      600,
      'button-game-start',
      () => {
        this.state.start('Game'),
        TimerHelper.startCounting();
      },
      this
    );

    // this.state.start('Game')
  }
}
