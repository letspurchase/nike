const phantom = require('phantom');
(async function() {
  const instance = await phantom.create(['--load-images=no', '--disk-cache=yes', '--ignore-ssl-errors=true']);
  const page = await instance.createPage();
  await page.on('onResourceRequested', function(requestData) {
    console.info('Requesting', requestData.url);
  });

  const status = await page.open('https://www.nike.com/cn/zh_cn')
  console.log(status)

  let test = await page.evaluate(function() {
    return $('body').innerHeight()
  })

  console.log(test)
  await instance.exit()
})();