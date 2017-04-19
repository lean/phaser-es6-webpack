import * as Phaser from 'phaser-ce';

export class Mushroom extends Phaser.Sprite {
  constructor (
    public game: any,
    public x: number,
    public y: number,
    public key: string | Phaser.RenderTexture | Phaser.BitmapData | PIXI.Texture,
  ) {
    super(game, x, y, key);
    this.key = this.key;
    this.anchor.setTo(0.5);
  }

  public update(): void {
    this.angle ++;
  }
}
