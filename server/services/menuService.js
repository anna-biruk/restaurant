const menuRepository = require('../repositories/menuRepository');


class MenuService {
   async getAll(limit,offset,search) {
        const menuItems =await menuRepository.getAll(limit,offset,search);

        return menuItems;
    }
    async createMenu(menuItem){
       const newMenuItem= await menuRepository.createMenu(menuItem);
       return newMenuItem;

    }
}

module.exports = new MenuService();