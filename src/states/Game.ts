/* globals __DEV__ */
import * as Phaser from 'phaser-ce';
import { Mushroom } from '../sprites/Mushroom';

declare var __DEV__: boolean;

export class GameState extends Phaser.State {

  public mushroom: Mushroom;

  public init(): void {}
  public preload(): void {}

  public create (): void {
    const bannerText = 'Phaser + ES6 + Webpack';
    let banner = this.add.text(this.world.centerX, this.game.height - 80, bannerText, null);
    banner.font = 'Bangers';
    banner.padding.set(10, 16);
    banner.fontSize = 40;
    banner.fill = '#77BFA3';
    banner.smoothed = false;
    banner.anchor.setTo(0.5);

    this.mushroom = new Mushroom(this, this.world.centerX, this.world.centerY, 'mushroom');
    console.log(this.mushroom);

    this.game.add.existing(this.mushroom);
  }

  public render(): void {
    if (__DEV__) {
      this.game.debug.spriteInfo(this.mushroom, 32, 32);
    }
  }
}
