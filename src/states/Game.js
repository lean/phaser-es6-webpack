/* globals __DEV__ */
import { State, Sprite, Text } from 'phaser'
import Selectable from '../components/Selectable'
// import Overlay from '../sprites/Overlay'
import ChoiceWheel from '../UI/ChoiceWheelHelper'
import {
  mainState,
  ROOM_LAPTOP_OPEN,
  ROOM_LAPTOP_BROKE,
  ROOM_LAPTOP_TO_TRASH,
  ROOM_LAPTOP_DROP,
  ROOM_PHONE_OPEN,
  ROOM_PHONE_BROKE,
  ROOM_PHONE_TO_TRASH,
  ROOM_PHONE_DROP,
  ROOM_FLAG_BROKE,
  ROOM_FLAG_TO_TRASH,
  ROOM_FLAG_DROP,
  ROOM_CALENDAR_BROKE,
  ROOM_CALENDAR_TO_TRASH,
  ROOM_CALENDAR_DROP,
  ROOM_STICKER_OPEN,
  ROOM_STICKER_BROKE,
  ROOM_STICKER_TO_TRASH,
  ROOM_STICKER_DROP,
} from '../configMainState'

export default class extends State {
  init() { }
  preload() { }

  makeChoice(decision, object) {
    if (!decision) return;

    switch (decision) {
      case ROOM_LAPTOP_OPEN:
        this.state.start('MainLaptopScreen');
        break;
      case ROOM_LAPTOP_BROKE:
        this.game.objects.broken.push(object.name);
        object.destroy();
        break;
      case ROOM_LAPTOP_TO_TRASH:
        this.game.objects.inTrash.push(object.name);
        object.destroy();
        break;
      case ROOM_LAPTOP_DROP:
        this.game.objects.dropped.push(object.name);
        object.destroy();
        break;
      
      case ROOM_PHONE_OPEN:
        this.state.start('MainPhoneScreen');
        break;
      case ROOM_PHONE_BROKE:
        this.game.objects.broken.push(object.name);
        object.destroy();
        break;
      case ROOM_PHONE_TO_TRASH:
        this.game.objects.inTrash.push(object.name);
        object.destroy();
        break;
      case ROOM_PHONE_DROP:
        this.game.objects.dropped.push(object.name);
        object.destroy();
        break;

      case ROOM_FLAG_BROKE:
        this.game.objects.broken.push(object.name);
        object.destroy();
        break;
      case ROOM_FLAG_TO_TRASH:
        this.game.objects.inTrash.push(object.name);
        object.destroy();
        break;
      case ROOM_FLAG_DROP:
        this.game.objects.dropped.push(object.name);
        object.destroy();
        break;

      case ROOM_CALENDAR_BROKE:
        this.game.objects.broken.push(object.name);
        object.destroy();
        break;
      case ROOM_CALENDAR_TO_TRASH:
        this.game.objects.inTrash.push(object.name);
        object.destroy();
        break;
      case ROOM_CALENDAR_DROP:
        this.game.objects.dropped.push(object.name);
        object.destroy();
        break;

      case ROOM_STICKER_BROKE:
        this.game.objects.broken.push(object.name);
        object.destroy();
        break;
      case ROOM_STICKER_TO_TRASH:
        this.game.objects.inTrash.push(object.name);
        object.destroy();
        break;
      case ROOM_STICKER_DROP:
        this.game.objects.dropped.push(object.name);
        object.destroy();
        break;
    }
  }

  create() {
    const bg = new Sprite(this.game, 0, 0, 'room');
    this.game.add.existing(bg);
    // this.bgOverlay = new Overlay

    mainState.objects.map((object) => {
      const gameObject = new Selectable(this.game, object.x, object.y, object.image)
      gameObject.name = object.name
      if (this.game.objects.isUnavaliable(object.name)) {
        gameObject.destroy();
        return null;
      }
      this.game.add.existing(gameObject);
      gameObject.onSelect.add(
        // (props) => Overlay.show(props)
        (props) => ChoiceWheel.openAt(
          gameObject.x + object.wheelOffsetX,
          gameObject.y + object.wheelOffsetY,
          object.options,
        ).then((option) => this.makeChoice(option.choice, gameObject))
      );
      // c.onSelect.add((props) => bgOverlay.show(props))
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
