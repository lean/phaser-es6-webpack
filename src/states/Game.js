/* globals __DEV__ */
import { State, Sprite, Text } from 'phaser'
import Selectable from '../components/Selectable'
// import Overlay from '../sprites/Overlay'
import ChoiceWheel from '../UI/ChoiceWheelHelper'
import config from '../config'

export default class extends State {
  init() { }
  preload() { }

  makeChoice(decision) {
    if (!decision) return;

    switch (decision) {
      case 'room-phone-open':
        this.state.start('MainPhoneScreen');
        break;
    }
  }

  create() {
    const bg = new Sprite(this.game, 0, 0, 'room');
    this.game.add.existing(bg);

    config.mainState.objects.map((object) => {
      const gameObject = new Selectable(this.game, object.x, object.y, object.image)
      this.game.add.existing(gameObject);
      gameObject.onSelect.add(
        (props) => ChoiceWheel.openAt(
          gameObject.x + object.wheelOffsetX,
          gameObject.y + object.wheelOffsetY,
          object.options,
        ).then((option) => this.makeChoice(option.choice))
      );
      // laptop.onSelect.add((props) => bgOverlay.show(props))
    })

    // this.debugged = phone
    // this.debugged.input.enableDrag(true);

    // const bgOverlay = new Overlay(this.game, 0, 0);
    // this.game.add.existing(bgOverlay);
  }

  render() {
    // this.game.debug.spriteInfo(this.debugged, 32, 32);
  }
}
