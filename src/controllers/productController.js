let dish = require('../database/dish');
let navbar = {
    home: '/#menu',
    about: '/#about',
    menu: '/#menu'
}

let productController = {
    dish,
    renderDetail: (req,res) => {
        let title = 'Featured today';
        let dishId = req.params.id;
        for (i=0 ; i < dish.length ; i++){
            if (dishId == dish[i].id) {
                res.render('./products/detail',{'title':title,'navbar':navbar,'dish':dish[i]});
            }
        }
    },
}

module.exports = productController;