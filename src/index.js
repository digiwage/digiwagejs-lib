var digiwagejs = require('bitcoinjs-lib')

Object.assign(digiwagejs.networks, require('./networks'))

digiwagejs.utils = require('./utils')

module.exports = digiwagejs