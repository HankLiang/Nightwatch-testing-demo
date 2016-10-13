const selenium = require('selenium-standalone')
const seleniumConfig = require('./selenium-conf.js')

selenium.install({
  version: seleniumConfig.selenium.version,
  baseURL: seleniumConfig.selenium.baseURL,
  drivers: seleniumConfig.driver,
  logger: function (message) { console.log(message) },
  progressCb: function (totalLength, progressLength, chunkLength) {}
}, function (err) {
  if (err) {
    console.log(err)
    throw new Error(`Selenium 安装错误: ${err}`)
  }
  console.log('Selenium 安装完成.')
})
