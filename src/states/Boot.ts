import * as Phaser from 'phaser-ce';
import * as WebFont from 'webfontloader';

export class BootState extends Phaser.State {
  public fontsReady: boolean;

  public init(): void {
    this.stage.backgroundColor = '#EDEEC9';
    this.fontsReady = false;
    this.fontsLoaded = this.fontsLoaded.bind(this);
  }

  public preload(): void {
    WebFont.load({
      google: {
        families: [ 'Bangers' ],
      },
      active: this.fontsLoaded,
    });

    let text = this.add.text(
      this.world.centerX,
      this.world.centerY,
      'loading fonts',
      { font: '16px Arial', fill: '#dddddd', align: 'center' });
    text.anchor.setTo(0.5, 0.5);

    this.load.image('loaderBg', './assets/images/loader-bg.png');
    this.load.image('loaderBar', './assets/images/loader-bar.png');
  }

  public render(): void {
    if (this.fontsReady) {
      this.state.start('Splash');
    }
  }

  public fontsLoaded(): void {
    this.fontsReady = true;
  }
}
