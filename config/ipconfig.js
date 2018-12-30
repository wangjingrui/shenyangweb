const config = {
  development: {
    ip: '192.100.20.12',
    port: '20050'
  },

  production: {
    ip: '',
    port: ''
  }
}

module.exports = config[ENV.mode] || config.production;
