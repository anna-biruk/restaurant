const menu =require('../constants/menu');


class MenuRepository {
    getAll() {
        return menu;
    }
}

module.exports = new MenuRepository();