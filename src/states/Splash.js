import Phaser from 'phaser'
import { centerGameObjects } from '../utils'

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
    this.game.load.spritesheet('catDude', 'assets/catSprites.png', 64, 64)
    this.game.load.tilemap('tilemap', 'assets/StackWorld.json', null, Phaser.Tilemap.TILED_JSON)
    this.game.load.image('tiles', 'assets/Platformer Art Complete Pack/Base Pack/Tiles/tiles_spritesheet.png')
    this.game.load.image('backgroundTiles', 'assets/Platformer Art Complete Pack/Base Pack/Items/items_spritesheet.png')
    this.game.load.image('candyLandTiles', 'assets/Platformer Art Complete Pack/Candy expansion/sheet.png')
    this.game.load.image('binaryTreeTiles', 'assets/Platformer Art Complete Pack/Mushroom expansion/PNG/spritesheet.png')
    this.game.load.image('industrialTiles', 'assets/Platformer Art Complete Pack/Request pack/sheet.png')
    this.game.load.image('icelandTiles', 'assets/Platformer Art Complete Pack/Ice expansion/sheet.png')
    this.game.load.image('buildingsTiles', 'assets/Platformer Art Complete Pack/Buildings expansion/sheet.png')
    this.game.load.image('clock', 'assets/Platformer Art Complete Pack/Buildings expansion/Tiles/clock.png')
    this.game.load.audio('bgMusic', 'assets/Catch The Mystery.WAV')
    this.game.load.audio('clockMusic', 'assets/Powerup.wav')
    this.game.load.audio('jumpSound', 'assets/swish-1.wav')
    this.game.load.audio('coinSound', 'assets/Pickup_Coin.wav')
    this.game.load.audio('gameover', 'assets/death.wav')
    this.game.load.image('goldCoin', 'assets/Platformer Art Complete Pack/Base Pack/Items/coinGold.png')
    this.game.load.image('bronzeCoin', 'assets/Platformer Art Complete Pack/Base Pack/Items/coinBronze.png')
    this.game.load.image('silverCoin', 'assets/Platformer Art Complete Pack/Base Pack/Items/coinSilver.png')
  }

  create () {
    this.state.start('Game')
  }
}
