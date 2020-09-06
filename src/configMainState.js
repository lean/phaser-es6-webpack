export const ROOM_LAPTOP_OPEN = Symbol('ROOM_LAPTOP_OPEN')
export const ROOM_LAPTOP_BROKE = Symbol('ROOM_LAPTOP_BROKE')
export const ROOM_LAPTOP_TO_TRASH = Symbol('ROOM_LAPTOP_TO_TRASH')
export const ROOM_LAPTOP_DROP = Symbol('ROOM_LAPTOP_DROP')

export const ROOM_PHONE_OPEN = Symbol('ROOM_PHONE_OPEN')
export const ROOM_PHONE_BROKE = Symbol('ROOM_PHONE_BROKE')
export const ROOM_PHONE_TO_TRASH = Symbol('ROOM_PHONE_TO_TRASH')
export const ROOM_PHONE_DROP = Symbol('ROOM_PHONE_DROP')

export const ROOM_FLAG_BROKE = Symbol('ROOM_FLAG_BROKE')
export const ROOM_FLAG_TO_TRASH = Symbol('ROOM_FLAG_TO_TRASH')
export const ROOM_FLAG_DROP = Symbol('ROOM_FLAG_DROP')

export const ROOM_CALENDAR_BROKE = Symbol('ROOM_CALENDAR_BROKE')
export const ROOM_CALENDAR_TO_TRASH = Symbol('ROOM_CALENDAR_TO_TRASH')
export const ROOM_CALENDAR_DROP = Symbol('ROOM_CALENDAR_DROP')

export const ROOM_STICKER_OPEN = Symbol('ROOM_STICKER_OPEN')
export const ROOM_STICKER_BROKE = Symbol('ROOM_STICKER_BROKE')
export const ROOM_STICKER_TO_TRASH = Symbol('ROOM_STICKER_TO_TRASH')
export const ROOM_STICKER_DROP = Symbol('ROOM_STICKER_DROP')

export const mainState = {
  objects: [
    {
      name: 'room-laptop',
      image: 'room-laptop-fade',
      imageZoom: 'room-laptop-fade',
      x: 325,
      y: 427,
      wheelOffsetX: 100,
      wheelOffsetY: 50,
      options: [
        {
          title: 'Открыть',
          choice: ROOM_LAPTOP_OPEN,
        },
        {
          title: 'Повредить',
          choice: ROOM_LAPTOP_BROKE,
        },
        {
          title: 'Выкинуть в мусорку',
          choice: ROOM_LAPTOP_TO_TRASH,
        },
        {
          title: 'Выкинуть в окно',
          choice: ROOM_LAPTOP_DROP,
        }
      ]
    },
    {
      name: 'room-phone',
      image: 'room-phone',
      imageZoom: 'room-phone',
      x: 328,
      y: 533,
      wheelOffsetX: 75,
      wheelOffsetY: 0,
      options: [
        {
          title: 'Открыть',
          choice: ROOM_PHONE_OPEN,
        },
        {
          title: 'Повредить',
          choice: ROOM_PHONE_BROKE,
        },
        {
          title: 'Выкинуть в мусорку',
          choice: ROOM_PHONE_TO_TRASH,
        },
        {
          title: 'Выкинуть в окно',
          choice: ROOM_PHONE_DROP,
        }
      ]
    },
    {
      name: 'room-flag',
      image: 'room-flag',
      imageZoom: 'room-flag',
      x: 250,
      y: 200,
      wheelOffsetX: 120,
      wheelOffsetY: 100,
      options: [
        {
          title: 'Порвать',
          choice: ROOM_CALENDAR_BROKE,
        },
        {
          title: 'Выкинуть в мусорку',
          choice: ROOM_CALENDAR_TO_TRASH,
        },
        {
          title: 'Выкинуть в окно',
          choice: ROOM_CALENDAR_DROP,
        }
      ]
    },
    {
      name: 'room-calendar',
      image: 'room-calendar',
      imageZoom: 'room-calendar',
      x: 1230,
      y: 270,
      wheelOffsetX: -100,
      wheelOffsetY: 100,
      options: [
        {
          title: 'Порвать',
          choice: ROOM_FLAG_BROKE,
        },
        {
          title: 'Выкинуть в мусорку',
          choice: ROOM_FLAG_TO_TRASH,
        },
        {
          title: 'Выкинуть в окно',
          choice: ROOM_FLAG_DROP,
        }
      ]
    },
    {
      name: 'room-sticker',
      image: 'room-sticker',
      imageZoom: 'room-sticker',
      x: 1160,
      y: 470,
      wheelOffsetX: -75,
      wheelOffsetY: 10,
      options: [
        {
          title: 'Посмотреть',
          choice: ROOM_STICKER_OPEN,
        },
        {
          title: 'Порвать',
          choice: ROOM_STICKER_BROKE,
        },
        {
          title: 'Выкинуть в мусорку',
          choice: ROOM_STICKER_TO_TRASH,
        },
        {
          title: 'Выкинуть в окно',
          choice: ROOM_STICKER_DROP,
        }
      ]
    },
  ]
}
