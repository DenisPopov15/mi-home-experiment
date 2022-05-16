'use strict'

const jwt = require('jsonwebtoken')

const publicKey = ''

module.exports = app => {
  const handler = async(req, res, next) => {
    try {
      const token = req.headers['google-assistant-signature']
      const decoded = jwt.verify(token, publicKey)
      const { iss, aud } = decoded
      if (iss !== 'https://accounts.google.com' || aud !== 'denis-home-test') {
        const invalidTokenError = new Error('Auth not valid')
        invalidTokenError.httpStatusCode = 401
        next(invalidTokenError)
      }

    } catch (error) {
      error.httpStatusCode = 401
      next(error)
    }

    next()
  }

  return handler
}
