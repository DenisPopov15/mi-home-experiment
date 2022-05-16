'use strict'

const { expect } = require('chai')
const wait = require('../wait')
const XiaomiService = require('../../src/services/XiaomiService')
const xiaomiService = new XiaomiService()

describe('XiaomiService', async() => {
  it('.getListOfDevices', async() => {
    const devices = await xiaomiService.getListOfDevices()
    await wait(4000)
    console.log('devices!!!', devices)

    expect(devices).to.be.not.undefined
  })
})
