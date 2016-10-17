module.exports = {
  'login qucrm ': function (client) {
    const email = '#email'
    const password = '#password'
    const sub = '.btn.btn-success'
    client.url('http://wm.com/site/login').maximizeWindow()
    client.pause(2000)  // 稍等两秒.

    client.expect.element('body').to.be.present.before(3000)
    client.expect.element(email).to.be.visible
    client.expect.element(password).to.be.visible
    client.expect.element(sub).to.be.visible

    client.setValue(email, 'ly604547351@163.com')
    client.setValue(password, 'abc123_')
    client.click(sub)

    client.pause(3000)
    client.getCookie('accesstoken', function callback(result) {
      var login = result.value !== undefined
      this.assert.equal(login, true)
      this.assert.equal(result.name, 'accesstoken')
     })

    client.expect.element('body').to.be.present.before(3000)
    client.expect.element('nav[role=navigation]').to.be.visible

    // 截一张图然后保存到 "reports/answer.png".
    client.saveScreenshot('pics/site/login.png')

    var list = client.page.memberList()
    list.navigate()
    client.pause(2000)
    list.setValue('@searchBar', 'hank')
    .search()

    client.saveScreenshot('pics/member/list.png')
    client.end()
  }
}
