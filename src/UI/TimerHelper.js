import Phaser from 'phaser'

// Сколько времени отсчитывает таймер
const TIME_IN_SECONDS = 5 * 60

class TimerHelper {
  constructor() {
    this.counting = false
    this.time = 0
  }

  _onTimerSecondElapsed() {
    this.time += 1
    if(this.time > TIME_IN_SECONDS) {
      this._onTimeEnd()
    }
    if(this.currentTimerText) {
      this.currentTimerText.text = this._getFormattedTime()
    }
  }

  _onTimeEnd() {
    this._stopTimer()
    // Что вызывать когда время выходит
    this.game.onTimeEnd()
  }

  _zeroPad(input) {
    return input < 10 ? "0" + input : input
  }

  _getFormattedTime() {
    const timeDiff = TIME_IN_SECONDS - this.time
    if(timeDiff > 0) {
      return [
        Math.floor(timeDiff / 60),
        this._zeroPad(timeDiff % 60),
      ].join(':')
    } else {
      return '0:00'
    }
  }

  _stopTimer() {
    window.clearInterval(this.interval)
    this.interval = undefined
  }

  startCounting() {
    this.interval = window.setInterval(() => {
      this._onTimerSecondElapsed() 
    }, 1000)
  }

  setGame(game) {
    this.game = game;
  }

  addTimerToCurrentState() {
    this.currentTimerText = this.game.add.text(
      100, 
      25, 
      this._getFormattedTime(), 
      {
        fill: '#ffffff'
      }
    )
  }
}

const timerHelper = new TimerHelper();

export default timerHelper;