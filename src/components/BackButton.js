import { Button } from 'phaser'

const BackButton = {
  addButton: (game, state, prevScreen) => {
    game.load.image('back', '../../assets/images/back-icon.png')
    const button = new Button(game, 50, 50, 'back', () => state.start(prevScreen))
    game.add.existing(button)
  }
}

export default BackButton
