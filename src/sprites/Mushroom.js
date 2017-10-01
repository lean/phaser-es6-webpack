import Phaser from 'phaser'

export default class extends Phaser.GameObjects.Sprite {
  constructor ({ scene, x, y, asset }) {
    super(scene, x, y, asset)
  }
}
