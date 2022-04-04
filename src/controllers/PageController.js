class PageController {
  renderHome (req, res) {
    res.render('taxes')
  }

  renderNotFound (req, res) {
    res.render('404')
  }
}

module.exports = PageController
