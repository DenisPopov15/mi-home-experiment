const miio = require('miio')

class XiaomiService {
  constructor (config, logger) {
    this._config = config
    this._logger = logger
    this._mio = miio
  }

  async getListOfDevices() {
    const devices = this._mio.devices()

    devices.on('available', device => {
      console.log('device available!!!', device)
    })

    devices.on('unavailable', device => {
      console.log('device available!!!', device)
    })

    return devices
  }
}

module.exports = XiaomiService