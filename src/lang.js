import idiom from 'idiom.js'

const lang = idiom({
  'default': {
    'welcome': 'Welcome to Phaser + ES6 + Webpack!'
  },
  'pt-BR': {
    'welcome': 'Bem vindo ao Phaser + ES6 + Webpack!'
  }
})

export default lang(window.navigator.language)
