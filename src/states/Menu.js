import Phaser from 'phaser'

export default class extends Phaser.State {
  init () {}
  preload () {
    this.game.load.image("playbutton", "assets/play-button.png");
  }

  create () {
    this.game.stage.backgroundColor = "#fff"
    let playButton = this.game.add.button(this.game.width / 2, this.game.height / 2, "playbutton", function(){
      this.game.start('Game')
    });
    playButton.anchor.set(0.5);
  }
  update () {}

}
