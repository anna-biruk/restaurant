const Menu = require('../../database/models/menu.models');
const {Op} = require("sequelize");


class MenuRepository {
    async getAll(limit, offset, search) {
        let options = {
            raw: true, limit: limit, offset: offset, where: {}
        };

        if (search) {
            options.where[Op.or] = [
                {
                    title: {
                        [Op.like]: `%${search}%`
                    }
                },
                {
                    category: {
                        [Op.like]: `%${search}%`
                    }
                }
            ]
        }

        const menu = await Menu.findAll(options);
        return menu;
    }

    async createMenu(menuItem) {
        const newMenuItem = await Menu.create(menuItem, {raw: true});
        return newMenuItem;
    }

    async updateMenuItem(menuItem) {
        const newUpdateMenuItem = await Menu.update(menuItem, { where: {id: menuItem.id}, raw: true});
        return newUpdateMenuItem;
    }
}

module.exports = new MenuRepository();