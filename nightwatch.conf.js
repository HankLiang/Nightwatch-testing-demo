const seleniumConfig = require('./build/selenium-conf')
const path = require('path')
const config = require('./config')

module.exports = (function (settings) {

    // 告诉 Nightwatch 我的 Selenium 在哪里。
    settings.selenium.server_path = `${path.resolve()}/node_modules/selenium-standalone/.selenium/selenium-server/${seleniumConfig.selenium.version}-server.jar`

    // 设置 Chrome Driver, 让 Selenium 有打开 Chrome 浏览器的能力。
    settings.selenium.cli_args['webdriver.chrome.driver'] = `${path.resolve()}/node_modules/selenium-standalone/.selenium/chromedriver/${seleniumConfig.driver.chrome.version}-${seleniumConfig.driver.chrome.arch}-chromedriver`

    // // 告诉 Nightwatch 我的 Selenium 在哪里。
    // settings.selenium.server_path = config.selenium

    // // 设置 Chrome Driver, 让 Selenium 有打开 Chrome 浏览器的能力。
    // settings.selenium.cli_args['webdriver.chrome.driver'] = config.driver
    return settings;
})(require('./nightwatch.json'))
