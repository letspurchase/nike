const Libs = require('./libs')
async function test(url) {
  let wwwCookies = await Libs.UrlCookie.getUrlCookie(url)
  // let uniteCookie = await Libs.UrlCookie.getUrlCookie('https://unite.nike.com', {cookie: wwwCookies})
  let res = await Libs.UrlCookie.post('https://unite.nike.com/login', {
    query: {
      appVersion: 527, experienceVersion: 425, uxid: 'com.nike.commerce.nikedotcom.web',
      locale: 'zh_CN', backendEnvironment: 'identity', browser: 'Google%20Inc.', os: undefined,
      mobile: false, native: false, visit: 1, visitor: 'b7ae0df8-d873-4ddc-9e10-1699a45fb9fe'
    },
    send: {
      client_id: 'HlHa2Cje3ctlaOqnxvgZXNaAs7T9nAuH',
      grant_type: 'password',
      password: 'Wangsen123',
      username: '+8618500506759',
      ux_id: 'com.nike.commerce.nikedotcom.web'
    },
    headers: {
      authority: 'unite.nike.com',
      origin: 'https://www.nike.com',
      referer: 'https://www.nike.com/cn/zh_cn/',
      "user-agent": `Mozilla/5.0 (Macintosh; Intel Mac OS X 10_14_1) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/71.0.3578.98 Safari/537.36`,
      Cookie: wwwCookies
    }
  })
  console.log(res)
}

test('https://www.nike.com/cn/zh_cn/')




