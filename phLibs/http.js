const superagent = require('superagent')

let agentExt = {
  ajax (method, url, config) {
    return new Promise((resolve, reject) => {
      let promise = this[method](url)
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
      promise.end((err, res) => {
        if (err) {
          console.log(err)
          reject(err)
        }
        resolve(res)
      })
    })
  }
}
export default {
  createAgent () {
    let agent = superagent.agent()
    return Object.assign(agent, agentExt)
  },

}