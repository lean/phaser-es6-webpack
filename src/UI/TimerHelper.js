import Phaser from 'phaser'

// Сколько времени отсчитывает таймер
const TIME_IN_SECONDS = 1 * 60

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
    this.game.result = 'timeout'
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

  addTimerToCurrentState({ x, y, fill } = {}) {
    const _x = x || 175;
    const _y = y || 25;
    const _fill = fill || '#000000';
    this.currentTimerText = this.game.add.text(
      _x,
      _y,
      this._getFormattedTime(),
      {
        fill: _fill,
        fontSize: '50px'
      }
    )
  }
}

const timerHelper = new TimerHelper();

export default timerHelper;