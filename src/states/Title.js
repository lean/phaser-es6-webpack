import Phaser from 'phaser'
import WebFont from 'webfontloader'

export default class extends Phaser.State {

  init () {
    this.fontsReady = false;
    this.fontsLoaded = this.fontsLoaded.bind(this);
  }

  preload () {
    this.add.image(0, 0, 'titleBg'); // 背景画像

    // ボタン
    const button = this.add.button(this.world.centerX - 60, this.world.centerY + 100, 'titleStartBtn', this.onGameStart, this, 2, 1, 0);
    button.onInputUp.add(this.upStartBtn, this);
    button.onInputOver.add(this.overStartBtn, this);
    button.onInputOut.add(this.outStartBtn, this);

    WebFont.load({
      google: {
        families: ['Bangers']
      },
      active: this.fontsLoaded
    });

    let text = this.add.text(this.world.centerX, this.world.centerY - (this.world.centerY / 2),
        'SAMPLE GAME', { font: '64px Arial', fill: '#ffffff', align: 'center' });
    text.anchor.setTo(0.5, 0.5);
  }

  render () {

  }

  fontsLoaded () {
    this.fontsReady = true
  }

  upStartBtn() {
    console.log('button up', arguments);
  }

  overStartBtn() {
    console.log('button over');
  }

  outStartBtn() {
    console.log('button out');
  }

  onGameStart(){
    this.state.start('Splash');
  }

}
