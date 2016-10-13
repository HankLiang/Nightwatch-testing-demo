module.exports = {
  'login qucrm ': ''+function (client) {
    // 定义 Bing 页面中的节点.
    const email = '#email'
    const password = '#password'
    const sub = '.btn.btn-success'
    client.url('http://wm.com/site/login').maximizeWindow()
    client.pause(2000)  // 稍等两秒.

    client.expect.element('body').to.be.present
    client.expect.element(email).to.be.visible
    client.expect.element(password).to.be.visible
    client.expect.element(sub).to.be.visible

    client.setValue(email, 'ly604547351@163.com')
    client.setValue(password, 'abc123_')
    client.click(sub)
    client.pause(4000)

    // 截一张图然后保存到 "reports/answer.png".
    client.expect.element('body').to.be.present
    client.saveScreenshot('reports/login2.png')
    client.end()
  }
}
