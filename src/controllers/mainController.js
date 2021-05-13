let dish = require('../database/dish');
let navbar = {
    home: '/',
    about: '#about',
    menu: '#menu'
}

let mainController = {
    dish,
    renderHome: (req,res) => {
        let title = 'Pimienta & Sal'
        res.render('index',{'title':title,'navbar':navbar,dish});
    },
}

module.exports = mainController;