const menuRepository = require('../repositories/menuRepository');


class MenuService {
    getAll() {
        const menuItems = menuRepository.getAll();

        return menuItems;
    }
}

module.exports = new MenuService();