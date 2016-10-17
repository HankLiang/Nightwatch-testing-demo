module.exports = {
  'member list': function (client) {
    var list = client.page.memberList()
    list.navigate()
    client.pause(3000)
    list.setValue('@searchBar', 'hank')
      .search()

    client.saveScreenshot('reports/member/list.png')
    client.end()
  }
}
