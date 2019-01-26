const superagent = require('superagent')
module.exports = {
  post (url, config) {
    return new Promise((resolve, reject) => {
      let promise = superagent.post(url)
      if (config.query) {
        promise = promise.query(config.query)
      }
      if (config.data) {
        promise = promise.send(config.data)
      }
      if (config.headers) {
        Object.keys(config.headers).forEach(key => {
          promise = promise.set(key, config.headers[key])
        })
      }
      if (config.cookie) {

      }
      promise.end((err, res) => {
        if (err) {
          console.log(err)
          reject(err)
        }
        resolve(res)
      })
    })
  },
  getUrlCookie (method, url, config = {}) {
    return new Promise((resolve, reject) => {
      let promise = superagent[method](url)
      // if (config.headers) {
      //   Object.keys(config.headers).forEach(key => {
      //     promise = promise.set(key, config.headers[key])
      //   })
      // }
      if (config.cookie) {
        promise = promise.set('Cookie', config.cookie)
      }
      promise.end((err, res) => {
        if (err) {
          console.log('err', err)
          reject(err)
        }
        resolve(res.headers['set-cookie'])
      })
    })
  }
}