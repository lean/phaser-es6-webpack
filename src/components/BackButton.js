import { Button } from 'phaser'

const BackButton = {
  addButton: (game, state, prevScreen, name) => {
    let x = 50
    let y = 30

    if (name === 'close') {
      x = 1342
      y = 30
    }

    const button = new Button(game, x, y, name, () => state.start(prevScreen))
    game.add.existing(button)
  }
}

export default BackButton
