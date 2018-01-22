/* globals __DEV__ */
import Phaser from 'phaser'

export default class extends Phaser.State {
  init () {}
  preload () {
  }

  create () {
     //Change the background colour
    this.game.stage.backgroundColor = "#a9f0ff"

    //Add the tilemap and tileset image. The first parameter in addTilesetImage
    //is the name you gave the tilesheet when importing it into Tiled, the second
    //is the key to the asset in Phaser
    this.map = this.game.add.tilemap('tilemap')
    this.map.addTilesetImage('platforms', 'tiles')
    this.map.addTilesetImage('background', 'backgroundTiles')
    this.map.addTilesetImage('candyland', 'candyLandTiles')
    this.map.addTilesetImage('binaryTreeLand', 'binaryTreeTiles')
    this.map.addTilesetImage('iceland', 'icelandTiles')
    this.map.addTilesetImage('industrial', 'industrialTiles')
    this.map.addTilesetImage('buildings', 'buildingsTiles')


    //Add both the background and ground layers. We won't be doing anything with the
    //GroundLayer though
    this.groundLayer = this.map.createLayer('GroundLayer')
    this.backgroundlayer = this.map.createLayer('BackgroundLayer')
    this.killlayer = this.map.createLayer('KillLayer')

    //Before you can use the collide function you need to set what tiles can collide
    this.map.setCollisionBetween(1, 1000, true, 'GroundLayer', true)


    //Change the world size to match the size of this layer
    this.groundLayer.resizeWorld()

    // Adds background music and loops
    this.music = this.game.add.audio('bgMusic')
    this.clockMusic = this.game.add.audio('clockMusic')
    this.jumpSound = this.game.add.audio('jumpSound')
    this.coinSound = this.game.add.audio('coinSound')
    this.music.play()
    this.music.loopFull()

     //Add the sprite to the game and enable arcade physics on it
    this.catDude = this.game.add.sprite(15, 0, 'catDude')
    this.catDude.anchor.setTo(0.5, 0.5)

    this.clock = this.game.add.sprite(-50, -10, 'clock')
    this.clock.anchor.setTo(0.5, 0.5)

    this.bronzeCoin = this.game.add.sprite(-50, -10, 'bronzeCoin')
    this.bronzeCoin.anchor.setTo(0.5, 0.5)

    this.silverCoin = this.game.add.sprite(-50, -10, 'silverCoin')
    this.silverCoin.anchor.setTo(0.5, 0.5)

    this.goldCoin = this.game.add.sprite(-50, -10, 'goldCoin')
    this.goldCoin.anchor.setTo(0.5, 0.5)


    // Enables physics
    this.game.physics.arcade.enable(this.clock)
    this.game.physics.arcade.enable(this.bronzeCoin)
    this.game.physics.arcade.enable(this.silverCoin)
    this.game.physics.arcade.enable(this.goldCoin)
    this.game.physics.arcade.enable(this.catDude)

    // Adjust collision size for sprite
    this.catDude.body.width = 40
    this.catDude.body.height = 55

    // adds animation frames
    this.catDude.animations.add('idle', [0, 1, 2, 3], 12, true)
    this.catDude.animations.add('right', [17, 18, 19, 20, 21, 22, 23], 24, true)
    this.catDude.animations.add('left', [17, 18, 19, 20, 21, 22, 23], 12, true)
    this.catDude.animations.add('flipRight', [50, 51, 52, 53, 54, 57], 24, true)
    this.catDude.animations.add('flipLeft', [50, 51, 52, 53, 54, 57], 24, true)

     //Make the camera follow the sprite
     this.game.camera.follow(this.catDude)

     //Enable cursor keys so we can create some controls
     this.cursors = this.game.input.keyboard.createCursorKeys()

    //Creates a group of items
    this.clock = this.game.add.group()
    this.bronzeCoin = this.game.add.group()
    this.silverCoin = this.game.add.group()
    this.goldCoin = this.game.add.group()

    this.bronzeCoin.enableBody = true
    this.silverCoin.enableBody = true
    this.goldCoin.enableBody = true
    this.clock.enableBody = true

    //  Here we'll create 30 of them randomly spread apart
    for (var i = 0; i < 30; i++) {
      // Create a gem inside of the 'gems' group
      let bronzeCoin = this.bronzeCoin.create(this.game.world.randomX, this.game.world.randomY, 'bronzeCoin')
      // Let gravity do its thing
      bronzeCoin.body.gravity.y = 600
      // This just gives each star a slightly random bounce value
      bronzeCoin.body.bounce.y = 0.7 + Math.random() * 0.2
    }

    //  Here we'll create 25 of them randomly spread apart
    for (var i = 0; i < 25; i++) {
      // Create a gem inside of the 'gems' group
      let silverCoin = this.silverCoin.create(this.game.world.randomX, this.game.world.randomY, 'silverCoin')
      // Let gravity do its thing
      silverCoin.body.gravity.y = 600
      // This just gives each star a slightly random bounce value
      silverCoin.body.bounce.y = 0.7 + Math.random() * 0.2
    }

    //  Here we'll create 15 of them randomly spread apart
    for (var i = 0; i < 15; i++) {
      // Create a gem inside of the 'gems' group
      let goldCoin = this.goldCoin.create(this.game.world.randomX, this.game.world.randomY, 'goldCoin')
      // Let gravity do its thing
      goldCoin.body.gravity.y = 600
      // This just gives each star a slightly random bounce value
      goldCoin.body.bounce.y = 0.7 + Math.random() * 0.2
    }

    //  Here we'll create 20 of them randomly spread apart
    for (var i = 0; i < 50; i++) {
      // Create a gem inside of the 'gems' group
      let clock = this.clock.create(this.game.world.randomX, this.game.world.randomY, 'clock')
      // Let gravity do its thing
      clock.body.gravity.y = 600
      clock.scale.y = 0.5;
      clock.scale.x = 0.5;
      // This just gives each star a slightly random bounce value
      clock.body.bounce.y = 0.7 + Math.random() * 0.2
    }
      // Creates countdown timer
      const updateTimer = () => {

        var currentTime = new Date();
        var timeDifference = this.startTime.getTime() - currentTime.getTime();

        //Time elapsed in seconds
        this.timeElapsed = Math.abs(timeDifference / 1000);

        //Time remaining in seconds
        var timeRemaining = this.totalTime - this.timeElapsed;

        //Convert seconds into minutes and seconds
        var minutes = Math.floor(timeRemaining / 60);
        var seconds = Math.floor(timeRemaining) - (60 * minutes);

        //Display minutes, add a 0 to the start if less than 10
        var result = (minutes < 10) ? "0" + minutes : minutes;

        //Display seconds, add a 0 to the start if less than 10
        result += (seconds < 10) ? ":0" + seconds : ":" + seconds;

        this.timeLabel.text = result;
    }

      const createTimer = () => {
        this.timeLabel = this.game.add.text(20, 20, "00:00", {font: "50px Gloria Hallelujah", fill: "#000"});
        this.timeLabel.fixedToCamera = true;
      }

      const createCounter = () => {
        this.totalValue = 0;
        this.countLabel = this.game.add.text(800, 20, `${this.totalValue} Points`, {font: "50px Gloria Hallelujah", fill: "#000"});
        this.countLabel.fixedToCamera = true;
      }

      // Create a custom timer
      this.startTime = new Date()
      this.totalTime = 20
      this.timeElapsed = 0

      createTimer()
      createCounter()

      this.gameTimer = this.game.time.events.loop(100, () => { updateTimer() })

      this.rules = this.game.add.text(20, 90, 'Find the key before time runs out! Collect clocks for time and coins for points! Good luck!', {font: '16px Gloria Hallelujah', fill: '#000'})
    }

    update () {

      //function for clock item
    const collectClocks = (player, clock) => {
      // plays jingle
      this.clockMusic.play()
      // Removes the gem from the screen
      clock.kill()
      // Displays 5 extra seconds
      this.addTime = this.game.add.text(100, 75, '+5 sec', {font: "20px Gloria Hallelujah", fill: "#F00"});
      this.addTime.fixedToCamera = true
      // Removes text after 5 second
      this.game.time.events.add(1000, () => { this.addTime.kill() })

      //  Adds 5 seconds to the total time
      this.totalTime += 5
    }

    const collectCoins = (player, coin) => {
      this.coinSound.play()
      coin.kill()
      var value
      if (coin.key === 'bronzeCoin') { value = 5 }
      if (coin.key === 'silverCoin') { value = 10 }
      if (coin.key === 'goldCoin') { value = 15 }
      this.totalValue += value
      this.countLabel.text = `${this.totalValue} Points`
    }

    // If you run out of time this displays lose message
    if (this.timeElapsed >= this.totalTime) {
      this.catDude.kill()
      this.loseLabel = this.game.add.text(100, 100, 'YOU LOST', {font: "100px Gloria Hallelujah", fill: "#000"});
      this.loseLabel.fixedToCamera = true;
      this.timeLabel.text = "Lost"
    }

      //Set some physics on the sprite
    this.catDude.body.gravity.y = 1000;
    this.catDude.body.gravity.x = 50;
    this.catDude.body.collideWorldBounds = true;

    //Make the sprite collide with the ground layer
    this.game.physics.arcade.collide(this.clock, this.groundLayer)
    this.game.physics.arcade.collide(this.goldCoin, this.groundLayer)
    this.game.physics.arcade.collide(this.bronzeCoin, this.groundLayer)
    this.game.physics.arcade.collide(this.silverCoin, this.groundLayer)
    this.game.physics.arcade.collide(this.catDude, this.groundLayer)

    //Calls collectGem if player overlaps gem
    this.game.physics.arcade.overlap(this.catDude, this.clock, collectClocks, null, this)
    this.game.physics.arcade.overlap(this.catDude, this.bronzeCoin, collectCoins, null, this)
    this.game.physics.arcade.overlap(this.catDude, this.silverCoin, collectCoins, null, this)
    this.game.physics.arcade.overlap(this.catDude, this.goldCoin, collectCoins, null, this)


    //Sets controls of Cat Dude
    if (this.cursors.right.isDown) {
        this.catDude.scale.x = 1;
        this.catDude.animations.play('right')
        this.catDude.body.velocity.x = 350;

    } else if (this.cursors.left.isDown) {
        this.catDude.scale.x = -1;
        this.catDude.animations.play('left')
        this.catDude.body.velocity.x = -350;

    } else if (this.cursors.up.isDown) {
        for (var i = 0; i < 1; i++) {
          this.jumpSound.play()
        }

        this.catDude.animations.play('flipRight')
        this.catDude.body.bounce.y = 0.2;
        this.catDude.body.velocity.y = -250;

    } else {
        this.catDude.animations.play('idle')
        this.catDude.scale.x = 1;
        this.catDude.body.velocity.x = 0;
    }

  }

  render () {
    // this.game.debug.body(this.catDude)
  }

}
