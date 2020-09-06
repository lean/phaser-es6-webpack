export default {
  gameWidth: 1440,
  gameHeight: 900,
  localStorageName: 'mz-game-search',
  webfonts: ['Inter'],
  mainState: {
    objects: [
      {
        image: 'room-laptop-fade',
        imageZoom: 'room-laptop-fade',
        x: 325,
        y: 427,
        wheelOffsetX: 100,
        wheelOffsetY: 50,
        options: [
          {
            title: 'one',
          },
          {
            title: 'two',
          },
          {
            title: 'three',
          }
        ]
      },
      {
        image: 'room-phone',
        imageZoom: 'room-phone',
        x: 328,
        y: 533,
        wheelOffsetX: 75,
        wheelOffsetY: 0,
        options: [
          {
            title: 'Открыть',
            choice: 'room-phone-open'
          },
          {
            title: 'two',
          },
          {
            title: 'three',
          }
        ]
      },
      {
        image: 'room-flag',
        imageZoom: 'room-flag',
        x: 250,
        y: 200,
        wheelOffsetX: 120,
        wheelOffsetY: 100,
        options: [
          {
            title: 'one',
          },
          {
            title: 'two',
          },
          {
            title: 'three',
          }
        ]
      },
      {
        image: 'room-calendar',
        imageZoom: 'room-calendar',
        x: 1230,
        y: 270,
        wheelOffsetX: -100,
        wheelOffsetY: 100,
        options: [
          {
            title: 'one',
          },
          {
            title: 'two',
          },
          {
            title: 'three',
          }
        ]
      },
      {
        image: 'room-sticker',
        imageZoom: 'room-sticker',
        x: 1160,
        y: 470,
        wheelOffsetX: -75,
        wheelOffsetY: 10,
        options: [
          {
            title: 'one',
          },
          {
            title: 'two',
          },
          {
            title: 'three',
          }
        ]
      },
    ]
  },
}
