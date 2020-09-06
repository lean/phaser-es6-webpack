import { State, Sprite, Text } from 'phaser'

export default class extends State {
  init() { }
  preload() { }

  create() {
    const bg = new Sprite(this.game, 0, 0, 'bootscreen');
    this.game.add.existing(bg);

    let titleText = '';
    switch (this.game.result) {
      case 'fire':
        titleText = 'Вы решились на отчаянный шаг и подожгли мусорку.\nВместо силовиков дверь вам выломали пожарные.\nКвартира сгорела.'
        const fire = new Sprite(this.game, 200, 200, 'fire');
        this.game.add.existing(fire);
        break;
      case 'open':
        titleText = 'Вы открыли дверь.\nВ квартиру ввалились около десятка мрачных людей:\nсиловики в форме, люди в штатском и понятые.'
        break;
      default:
        titleText = 'Время истекло.\nОперативникам надоело стоять под дверью, и они ее выломали.'
        break;
    }

    this.game.add.text(100, 200, titleText, { font: 'bold 20pt Arial', fill: 'white' })
  }

  render() {
    // this.game.debug.spriteInfo(this.debugged, 32, 32);
  }
}
