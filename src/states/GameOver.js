import { State, Sprite, Text } from 'phaser'

export default class extends State {
  init() { }
  preload() { }

  create() {
    const bg = new Sprite(this.game, 0, 0, 'bootscreen');
    this.game.add.existing(bg);
  }

  render() {
    // this.game.debug.spriteInfo(this.debugged, 32, 32);
  }
}
