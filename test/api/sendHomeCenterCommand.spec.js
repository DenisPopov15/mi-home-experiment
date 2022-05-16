'use strict'

const { expect } = require('chai')
const request    = require('supertest')

describe('HomeCenterCommand', async() => {
  it('sendHomeCenterCommand', async() => {

    const response = await request(global.server)
      .post('/api/sendCommand')
      .send({ params: {} })

    expect(response.status).to.be.equal(200)
  })
})
