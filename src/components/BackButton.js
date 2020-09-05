import { Button } from 'phaser'

const BackButton = {
  getRndName: (name) => `${name}-${Math.random(0, 9999)}`,
  prevButton: (game, state, prevScreen) => {
    const name = BackButton.getRndName('back')
    game.load.image(name, '../../assets/images/back-icon.png')
    const button = new Button(game, 50, 50, name, () => state.start(prevScreen))
    game.add.existing(button)
  },
  closeButton: (game, state, prevScreen) => {
    const name = BackButton.getRndName('close')
    game.load.image(name, '../../assets/images/close-icon.png')
    const button = new Button(game, 500, 1200, name, () => state.start(prevScreen))
    game.add.existing(button)
  }
}

export default BackButton
