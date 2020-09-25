const menuService = require('../services/menuService');

class MenuController {
    async getAll(req, res) {
        const {limit = 10, offset = 0, search = ''} = req.query;
        const menuItems = await menuService.getAll(limit, offset, search);
        res.json(menuItems);
    }

    async createMenu(req, res) {
        const {title, price, category, url} = req.body;
        const newMenuItem = await menuService.createMenu({title, price, category, url});
        res.json(newMenuItem);
    }

    async updateMenuItem(req, res) {
        const {title, price, category, url, id} = req.body;
        const newMenuItem = await menuService.updateMenuItem({title, price, category, url, id});
        res.json(newMenuItem);
    }
}

module.exports = new MenuController();