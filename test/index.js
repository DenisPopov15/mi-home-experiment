'use strict'

const App = require('../src/App')

before(async() => {
  const app = new App()
  await app.start()

  global.server = app.server
})

describe('API', () => {
  require('./api/sendHomeCenterCommand.spec')
})

describe.only('Services', () => {
  require('./services/XiaomiService.spec')
})

describe('Helpers', () => {
  require('./helpers/createAuth.spec')
})

// describe('Middlwares:', () => {
//   require('./middleware/auth.spec')
// })
