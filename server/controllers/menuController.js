const menuService=require('../services/menuService');

class MenuController {
    getAll(req, res) {
        const menuItems = menuService.getAll();
        res.json(menuItems);
    }
}

module.exports = new MenuController();