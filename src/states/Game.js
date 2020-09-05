/* globals __DEV__ */
import { State, Sprite, Text } from 'phaser'
import Laptop from '../sprites/Laptop'
import Overlay from '../sprites/Overlay'

export default class extends State {
  init() { }
  preload() { }

  create() {
    const bg = new Sprite(this.game, 0, 0, 'room');
    this.game.add.existing(bg);

    const laptop = new Laptop(this.game, 325, 427);
    this.laptop = laptop;
    this.game.add.existing(laptop);

    // laptop.input.enableDrag(true);

    const bgOverlay = new Overlay(this.game, 0, 0);
    this.game.add.existing(bgOverlay);

    laptop.onSelect.add(() => bgOverlay.show())
  }

  render() {
    this.game.debug.spriteInfo(this.laptop, 32, 32);
  }
}
