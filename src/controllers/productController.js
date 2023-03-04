const dish = require('../database/dish')
const navbar = {
  home: '/#menu',
  about: '/#about',
  menu: '/#menu'
}

const productController = {
  dish,
  renderDetail: (req, res) => {
    const title = 'Featured'
    const dishId = req.params.id
    let dishToShow
    for (let i = 0; i < dish.length; i++) {
      if (Number(dishId) === dish[i].id) {
        dishToShow = dish[i]
      }
    }
    res.render('./products/detail', { title, navbar, dish: dishToShow })
  }
}

module.exports = productController
