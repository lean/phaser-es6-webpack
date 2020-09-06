# Visual Indicator

Easily add a countdown (or count up) timer for your [Phaser](http://phaser.io) games. Support for browserify included :)

![](demo.gif)

## Install

You can clone this repo or use bower to install it:
```
bower install git://github.com/terebentina/VisualTimer.git --save
```

Usage:
```javascript
// if you use browserify use the following, otherwise load it with your preferred method
var VisualTimer = require('path/to/VisualTimer');

// in preload
game.load.spritesheet('timer', 'assets/img/timer.png', 150, 20);

// in create
var indicator = new VisualTimer({
					game: this.game,
					x: 123,
					y: 456,
					seconds: 60,
					onComplete: function() {...}
				});
indicator.start();
```

This will show a progress bar indicator at (123, 456) and will it'll start counting down as soon as you call start() on it. After the time is up the onComplete() callback will be triggered.

## Options
You can use the following options when initialising the indicator:

| Option | Description |
|--------|-------------|
| game| (required) a reference to the phaser.game object|
| x| (required) the x coordinate for the indicator|
| y| (required) the y coordinate for the indicator|
| seconds| (required) the time to count|
| onComplete| (required) a function to call when the time is up|
| type| (optional, default 'down') this is either 'up' or 'down' to have the indicator start from 0 up to `seconds` or from `seconds` down to 0|
| context| (optional) you might want to pass `this` for the context to have the `onComplete` callback run in that context. If not specified, it'll run in the context of the indicator|
| key| (optional, default 'timer') the cache key from the preload step.|


## Methods

| Method | Description |
|--------|-------------|
| start| resets the timer and starts from the beginning.|
| stop| stops the timer (note that `onComplete` will not be called when you call `stop`)|
| reset| resets the timer|
| pause| pauses the timer|
| resume| resumes the timer after a pause|
| remainingTime| returns the remaining time|


## Flags

| Flag | Description |
|--------|-------------|
| hasFinished | boolean value showing if the indicator has finished counting or not |


## Graphics
The default indicator provided is a blue gradient on grey, with some stripes.
![](assets/img/timer.png)

You can create your own custom graphics: the first half of the spritesheet MUST be the top part that changes size to 0 and the second half should be the background. Do not invert the order of the 2 or it will look like the countdown goes from full to 0 in a second.
This is due to a current limitation in Phaser.
If you change the dimension of the indicator, make sure you adjust the width/height of the frames when you load the spritesheet. The default spritesheet provided is 150px by 20px:
`game.load.spritesheet('timer', 'assets/img/timer.png', 150, 20);`
