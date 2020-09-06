/* globals __DEV__ */
import { State, Sprite, Text } from 'phaser'
import Selectable from '../components/Selectable'
import Overlay from '../sprites/Overlay'
import ChoiceWheel from '../UI/ChoiceWheelHelper'
import TimerHelper from '../UI/TimerHelper'
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
  ROOM_TRASH_FIRE,
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
        object.softDisable();
        break;
      case ROOM_LAPTOP_TO_TRASH:
        this.game.objects.inTrash.push(object.name);
        object.softDisable();
        break;
      case ROOM_LAPTOP_DROP:
        this.game.objects.dropped.push(object.name);
        object.softDisable();
        break;
      
      case ROOM_PHONE_OPEN:
        this.state.start('MainPhoneScreen');
        break;
      case ROOM_PHONE_BROKE:
        this.game.objects.broken.push(object.name);
        object.softDisable();
        break;
      case ROOM_PHONE_TO_TRASH:
        this.game.objects.inTrash.push(object.name);
        object.softDisable();
        break;
      case ROOM_PHONE_DROP:
        this.game.objects.dropped.push(object.name);
        object.softDisable();
        break;

      case ROOM_FLAG_BROKE:
        this.game.objects.broken.push(object.name);
        object.softDisable();
        break;
      case ROOM_FLAG_TO_TRASH:
        this.game.objects.inTrash.push(object.name);
        object.softDisable();
        break;
      case ROOM_FLAG_DROP:
        this.game.objects.dropped.push(object.name);
        object.softDisable();
        break;

      case ROOM_CALENDAR_BROKE:
        this.game.objects.broken.push(object.name);
        object.softDisable();
        break;
      case ROOM_CALENDAR_TO_TRASH:
        this.game.objects.inTrash.push(object.name);
        object.softDisable();
        break;
      case ROOM_CALENDAR_DROP:
        this.game.objects.dropped.push(object.name);
        object.softDisable();
        break;

      case ROOM_STICKER_BROKE:
        this.game.objects.broken.push(object.name);
        object.softDisable();
        break;
      case ROOM_STICKER_TO_TRASH:
        this.game.objects.inTrash.push(object.name);
        object.softDisable();
        break;
      case ROOM_STICKER_DROP:
        this.game.objects.dropped.push(object.name);
        object.softDisable();
        break;
      
      case ROOM_TRASH_FIRE:
        this.game.result = 'fire';
        this.game.onTimeEnd();
        break;
    }
  }

  create() {
    const bg = new Sprite(this.game, 0, 0, 'room');
    this.game.add.existing(bg);
    // this.bgOverlay = new Overlay

    const trash = new Sprite(this.game, 700, 480, 'room-trash');
    this.game.add.existing(trash);

    mainState.objects.map((object) => {
      const gameObject = new Selectable(this.game, object.x, object.y, object.image)
      gameObject.name = object.name
      this.game.add.existing(gameObject);
      if (this.game.objects.isUnavaliable(object.name)) {
        gameObject.softDisable();
      }
      gameObject.onSelect.add( 
        (props) =>  {
          if (this.bgOverlay) this.bgOverlay.destroy()
          this.bgOverlay = new Overlay(this.game, 0, 0);
          this.game.add.existing(this.bgOverlay);
          this.bgOverlay.show({
            image: object.imageZoom,
            options: object.options,
            cb: (option) => this.makeChoice(option.choice, gameObject),
          });
        }
      );

      this.game.add.button(
        950,
        30,
        'button-game-start',
        () => {
          this.game.result = 'open'
          this.game.onTimeEnd()
        },
        this
      );
      // // (props) => Overlay.show(props)
      // ChoiceWheel.openAt(
      //   gameObject.x + object.wheelOffsetX,
      //   gameObject.y + object.wheelOffsetY,
      //   object.options,
      // ).then((option) => this.makeChoice(option.choice, gameObject))
      // );
      // c.onSelect.add((props) => bgOverlay.show(props))
    // })

    // this.debugged = phone
    // this.debugged.input.enableDrag(true);

    // const bgOverlay = new Overlay(this.game, 0, 0);
    // this.game.add.existing(bgOverlay);
    })

    TimerHelper.addTimerToCurrentState()
  }

  render() {
    // this.game.debug.spriteInfo(this.debugged, 32, 32);
  }
}
