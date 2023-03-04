const dish = require('../database/dish')
const navbar = {
  home: '/',
  about: '#about',
  menu: '#menu'
}

const mainController = {
  dish,
  renderHome: (req, res) => {
    const title = 'Pimienta & Sal'
    res.render('index', { title, navbar, dish })
  }
}

module.exports = mainController
