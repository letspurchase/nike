const phantom = require('phantom');
(async function () {
  const instance = await phantom.create(['--load-images=no', '--disk-cache=false', '--ignore-ssl-errors=true']);
  const page = await instance.createPage();
  await page.on('onResourceRequested', function (requestData) {
    console.info('Requesting', requestData.url, requestData.method);
  });

  const status = await page.open('https://store.nike.com/cn/zh_cn/?l=shop,login')
  console.log(status)

  setTimeout(async function () {
    await page.evaluate(function () {
      $('#nike-unite-mobileLoginForm input[name=verifyMobileNumber]')[0].value = "18500506759"
      $('#nike-unite-mobileLoginForm input[name=password]')[0].value = "Wangsen123"
      $('#nike-unite-mobileLoginForm .nike-unite-submit-button input')[0].click()
      return true
    })
    let firstIn = false
    console.log(1111111)
    page.on('onResourceReceived', async function (response) {
      console.log('---', response.url, response.status)
      if (response.stage === 'end' && !firstIn) {
        firstIn = true
        console.log('====================run')
        // window.nike.unite.session.getCredential(function(a){console.log(a)}, function b() {console.log(arguments)})
        // let cookies = await page.cookies()
        // console.log(cookies)
        //
        // cookies.forEach((cookie) => {
        //   agent.cookieJar.setCookie(cookie, cookie.domain)
        // })
        //
        // agent.ajax('post', '')
        // await instance.exit()
      }
    })
  }, 1000)
})();