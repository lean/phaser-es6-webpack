import * as Phaser from 'phaser-ce'

export class SplashState extends Phaser.State {
  init () {}

  public loaderBg: any;
  public loaderBar: any;

  preload () {
    this.loaderBg = this.add.sprite(this.game.world.centerX, this.game.world.centerY, 'loaderBg')
    this.loaderBar = this.add.sprite(this.game.world.centerX, this.game.world.centerY, 'loaderBar')
    this.centerGameObjects([this.loaderBg, this.loaderBar])

    this.load.setPreloadSprite(this.loaderBar)
    //
    // load your assets
    //
    this.load.image('mushroom', 'assets/images/mushroom2.png')
  }

  create () {
    this.state.start('Game')
  }

  centerGameObjects(objects: any) {
    objects.forEach((object: any) => {
      object.anchor.setTo(0.5)
    })
  }
}
