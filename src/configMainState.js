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

export const ROOM_TRASH_FIRE = Symbol('ROOM_TRASH_FIRE')

export const mainState = {
  objects: [
    {
      name: 'room-laptop',
      image: 'room-laptop-fade',
      imageZoom: 'room-laptop-zoom',
      x: 285,
      y: 413,
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
      image: 'room-phone-fade',
      imageZoom: 'room-phone-zoom',
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
      image: 'room-flag-fade',
      imageZoom: 'room-flag-zoom',
      x: 231,
      y: 193,
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
      image: 'room-calendar-fade',
      imageZoom: 'room-calendar-zoom',
      x: 1227,
      y: 278,
      wheelOffsetX: -200,
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
      image: 'room-sticker-fade',
      imageZoom: 'room-sticker-zoom',
      x: 1156,
      y: 466,
      wheelOffsetX: -175,
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
    {
      name: 'room-trash',
      image: 'room-trash',
      imageZoom: 'room-trash-zoom',
      x: 700,
      y: 480,
      wheelOffsetX: -200,
      wheelOffsetY: 100,
      options: [
        {
          title: 'Поджечь',
          choice: ROOM_TRASH_FIRE,
        },
      ]
    },
  ]
}
