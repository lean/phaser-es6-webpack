/* globals __DEV__ */
import Phaser from 'phaser'

export default class extends Phaser.State {
  init () {}
  preload () {
    this.game.load.spritesheet('catDude', 'assets/catSprites.png', 64, 64)
    this.game.load.tilemap('tilemap', 'assets/StackWorld.json', null, Phaser.Tilemap.TILED_JSON)
    this.game.load.image('tiles', 'assets/Platformer Art Complete Pack/Base Pack/Tiles/tiles_spritesheet.png')
    this.game.load.image('backgroundTiles', 'assets/Platformer Art Complete Pack/Base Pack/Items/items_spritesheet.png')
    this.game.load.image('candyLandTiles', 'assets/Platformer Art Complete Pack/Candy expansion/sheet.png')
    this.game.load.image('binaryTreeTiles', 'assets/Platformer Art Complete Pack/Mushroom expansion/PNG/spritesheet.png')
    this.game.load.image('industrialTiles', 'assets/Platformer Art Complete Pack/Request pack/sheet.png')
    this.game.load.image('icelandTiles', 'assets/Platformer Art Complete Pack/Ice expansion/sheet.png')
    this.game.load.image('buildingsTiles', 'assets/Platformer Art Complete Pack/Buildings expansion/sheet.png')
    this.game.load.image('clock', 'assets/Platformer Art Complete Pack/Buildings expansion/Tiles/clock.png')
  }

  create () {

    //Start the Arcade Physics systems
    this.game.physics.startSystem(Phaser.Physics.ARCADE)

    // // //Change the background colour
    this.game.stage.backgroundColor = "#a9f0ff"

    //Add the tilemap and tileset image. The first parameter in addTilesetImage
    //is the name you gave the tilesheet when importing it into Tiled, the second
    //is the key to the asset in Phaser
    this.map = this.game.add.tilemap('tilemap')
    this.map.addTilesetImage('platforms', 'tiles')
    this.map.addTilesetImage('background', 'backgroundTiles')
    this.map.addTilesetImage('candyland', 'candyLandTiles')
    this.map.addTilesetImage('binaryTreeLand', 'binaryTreeTiles')
    this.map.addTilesetImage('industrial', 'industrialTiles')
    this.map.addTilesetImage('buildings', 'buildingsTiles')

    //console.log(this.map)
    //Add both the background and ground layers. We won't be doing anything with the
    //GroundLayer though
    this.groundLayer = this.map.createLayer('GroundLayer')
    this.backgroundlayer = this.map.createLayer('BackgroundLayer')
    //Before you can use the collide function you need to set what tiles can collide
    this.map.setCollisionBetween(1, 1000, true, 'GroundLayer', true)

    //Change the world size to match the size of this layer
    this.groundLayer.resizeWorld()


     //Add the sprite to the game and enable arcade physics on it
    this.catDude = this.game.add.sprite(300, 0, 'catDude')
    this.catDude.anchor.setTo(0.5, 0.5)


    this.clock = this.game.add.sprite(0, 0, 'clock')

    this.clock.anchor.setTo(0.5, 0.5)

    this.game.physics.arcade.enable(this.clock)
    this.game.physics.arcade.enable(this.catDude)

    this.catDude.frame = 0

    this.catDude.animations.add('idle', [0, 1, 2, 3], 12, true)
    this.catDude.animations.add('right', [17, 18, 19, 20, 21, 22, 23], 24, true)
    this.catDude.animations.add('left', [17, 18, 19, 20, 21, 22, 23], 12, true)
    this.catDude.animations.add('flipRight', [50, 51, 52, 53, 54, 57], 24, true)
    this.catDude.animations.add('flipLeft', [50, 51, 52, 53, 54, 57], 24, true)

     //Make the camera follow the sprite
     this.game.camera.follow(this.catDude)

     //Enable cursor keys so we can create some controls
     this.cursors = this.game.input.keyboard.createCursorKeys()

    //Creates a group of Clocks
    this.clock = this.game.add.group()

    this.clock.enableBody = true

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
        this.timeLabel = this.game.add.text(20, 20, "00:00", {font: "50px Arial", fill: "#000"});
        this.timeLabel.fixedToCamera = true;
      }

      // Create a custom timer
      this.startTime = new Date()
      this.totalTime = 30
      this.timeElapsed = 0

      createTimer()

      this.gameTimer = this.game.time.events.loop(100, () => { updateTimer() })
    }

    update () {

    const collectClocks = (player, clock) => {
      // Removes the gem from the screen
      clock.kill();
      //  Adds 10 seconds to the total time
      this.totalTime += 5
    }

    if (this.timeElapsed >= this.totalTime){
      this.catDude.kill()
      this.loseLabel = this.game.add.text(100, 100, 'YOU LOSE', {font: "100px Arial", fill: "#000"});
      this.loseLabel.fixedToCamera = true;
      this.timeLabel.text = "Lose"
    }

      //Set some physics on the sprite
    this.catDude.body.gravity.y = 1000;
    this.catDude.body.gravity.x = 50;
    this.catDude.body.collideWorldBounds = true;

    //Make the sprite collide with the ground layer
    this.game.physics.arcade.collide(this.clock, this.groundLayer)
    this.game.physics.arcade.collide(this.catDude, this.groundLayer)

    //Calls collectGem if player overlaps gem
    this.game.physics.arcade.overlap(this.catDude, this.clock, collectClocks, null, this);


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
        this.catDude.animations.play('flipRight')
        this.catDude.body.bounce.y = 0.2;
        this.catDude.body.velocity.y = -200;

    } else {
        this.catDude.animations.play('idle')
        this.catDude.scale.x = 1;
        this.catDude.body.velocity.x = 0;
    }
  }

  // render () {

}
