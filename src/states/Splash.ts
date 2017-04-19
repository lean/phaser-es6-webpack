import * as Phaser from 'phaser-ce';

export class SplashState extends Phaser.State {

  public loaderBg: any;
  public loaderBar: any;

  public init(): void {}

  public preload(): void {
    this.loaderBg = this.add.sprite(this.game.world.centerX, this.game.world.centerY, 'loaderBg');
    this.loaderBar = this.add.sprite(this.game.world.centerX, this.game.world.centerY, 'loaderBar');
    this.centerGameObjects([ this.loaderBg, this.loaderBar ]);

    this.load.setPreloadSprite(this.loaderBar);
    //
    // load your assets
    //
    this.load.image('mushroom', 'assets/images/mushroom2.png');
  }

  public create(): void {
    this.state.start('Game');
  }

  centerGameObjects(objects: any): void {
    objects.forEach((object: any) => {
      object.anchor.setTo(0.5);
    });
  }
}
