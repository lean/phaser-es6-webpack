/* globals __DEV__ */
import { State, Sprite, Text } from 'phaser'
import Selectable from '../components/Selectable'
// import Overlay from '../sprites/Overlay'
import ChoiceWheel from '../UI/ChoiceWheelHelper'

export default class extends State {
  init() { }
  preload() { }

  create() {
    const bg = new Sprite(this.game, 0, 0, 'room');
    this.game.add.existing(bg);

    const laptop = new Selectable(this.game, 325, 427, 'room-laptop-fade');
    this.game.add.existing(laptop);
    laptop.onSelect.add(
      (props) => ChoiceWheel.openAt(
        laptop.x + 100,
        laptop.y + 50,
        [
          { title: 'one' },
          { title: 'two' },
          { title: 'three' },
        ],
      ).then(() => this.hide())
    );
    // laptop.onSelect.add((props) => bgOverlay.show(props))

    const phone = new Selectable(this.game, 328, 533, 'room-phone');
    this.game.add.existing(phone);
    phone.onSelect.add((props) =>
      ChoiceWheel.openAt(
        phone.x + 75,
        phone.y,
        [
          { title: 'Открыть' },
          { title: 'two' },
          { title: 'three' },
        ],
      ).then(
        (option) => {
          if (option.title = 'Открыть') {
            this.state.start('MainPhoneScreen');
          }
        }
      )
    )
    // phone.onSelect.add((props) => bgOverlay.show(props))

    const flag = new Selectable(this.game, 250, 200, 'room-flag');
    this.game.add.existing(flag);
    flag.onSelect.add((props) =>
      ChoiceWheel.openAt(
        flag.x + 120,
        flag.y + 100,
        [
          { title: 'one' },
          { title: 'two' },
          { title: 'three' },
        ],
      ).then(() => this.hide())
    )
    // flag.onSelect.add((props) => bgOverlay.show(props))

    const calendar = new Selectable(this.game, 1230, 270, 'room-calendar');
    this.game.add.existing(calendar);
    calendar.onSelect.add((props) =>
      ChoiceWheel.openAt(
        calendar.x - 100,
        calendar.y + 100,
        [
          { title: 'one' },
          { title: 'two' },
          { title: 'three' },
        ],
      ).then(() => this.hide())
    )
    // calendar.onSelect.add((props) => bgOverlay.show(props))

    const sticker = new Selectable(this.game, 1160, 470, 'room-sticker');
    this.game.add.existing(sticker);
    sticker.onSelect.add((props) =>
      ChoiceWheel.openAt(
        sticker.x - 75,
        sticker.y + 10,
        [
          { title: 'one' },
          { title: 'two' },
          { title: 'three' },
        ],
      ).then(() => this.hide())
    )
    // sticker.onSelect.add((props) => bgOverlay.show(props))

    this.debugged = phone
    // this.debugged.input.enableDrag(true);

    // const bgOverlay = new Overlay(this.game, 0, 0);
    // this.game.add.existing(bgOverlay);
  }

  render() {
    // this.game.debug.spriteInfo(this.debugged, 32, 32);
  }
}
