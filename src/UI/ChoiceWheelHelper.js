import { ChoiceWheel as ChoiceWheelCmp } from "../components/ChoiceWheel";

class ChoiceWheelHelper {
  constructor() {
    this.wheelVisible = false
  }

  _closeWheel() {
    this.wheel.destroy()
    this.wheel = undefined
    this.wheelVisible = false
  }

  setGame(game) {
    this.game = game
  }

  openAt(x, y, options, position) {
    return new Promise((resolve) => {
      if(this.wheelVisible) {
        this._closeWheel()
      }
      const wheel = new ChoiceWheelCmp(this.game, x, y, options, position)
      wheel.onSelect.add(selectedOption => {
        resolve(selectedOption)
        this._closeWheel()
      })
      this.wheel = wheel
      this.wheelVisible = true
    })
  }
}

const choiceWheel = new ChoiceWheelHelper()

export default choiceWheel
