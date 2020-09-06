/* ==========================================
 * VisualTimer.js
 * https://github.com/terebentina/VisualTimer
 * ==========================================
 * Copyright 2014 Dan Caragea.
 *
 * Licensed under the MIT license
 * http://opensource.org/licenses/MIT
 * ========================================== */

(function() {
	"use strict";

	function VisualTimer(opts) {
		this.type = 'down';
		if (opts.type) {
			this.type = opts.type;
		}
		this.totalTime = opts.seconds;
		this.game = opts.game;
		this.onComplete = opts.onComplete;
		var key = 'timer';
		if (opts.key) {
			key = opts.key;
		}
		this.game.add.sprite(opts.x, opts.y, key, 1);
		this.sprite = this.game.add.sprite(opts.x, opts.y, key, 0);
		this.fullWidth = this.sprite.width;
		this.reset();
	}

	VisualTimer.prototype = {
		reset: function() {
			if (this.timer) {
				this.timer.stop();
			}
			var self = this;
			this.hasFinished = false;
			this.timer = this.game.time.create(true);
			this.timer.repeat(Phaser.Timer.SECOND, this.totalTime, timerTick, this);
			this.timer.onComplete.add(function() {
				self.hasFinished = true;
				if (self.onComplete) {
					self.onComplete();
				}
			});
			this.rect = new Phaser.Rectangle(0, 0, 0, this.sprite.height);
			if (this.type == 'down') {
				this.sprite.crop(null);
			} else {
				this.sprite.crop(this.rect);
			}
		},

		setTime: function(seconds) {
			this.totalTime = seconds;
			this.reset();
		},

		start: function() {
			this.reset();
			this.timer.start();
		},

		stop: function() {
			this.timer.stop();
		},

		pause: function() {
			this.timer.pause();
		},

		resume: function() {
			this.timer.resume();
		},

		remainingTime: function() {
			return this.totalTime - this.timer.seconds;
		}
	};


	function timerTick() {
		/*jshint validthis:true */
		var myTime = (this.type == 'down') ? this.remainingTime() : this.timer.seconds;
		this.rect.width = Math.max(0, (myTime / this.totalTime) * this.fullWidth);
		this.sprite.crop(this.rect);
	}


	if (module) {
		module.exports = VisualTimer;
	}
})();
