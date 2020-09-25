const Order = require('../../database/models/order.models');
const {Op} = require("sequelize");

class OrderRepository {
    async createOrder(order) {
        const newOrder = Order.create(order, {raw: true});
        return newOrder;
    }

    async getAll(limit, offset, search) {
        let options = {
            raw: true, limit: limit, offset: offset, where: {}
        };

        if (search) {
            options.where[Op.or] = [
                {
                    name: {
                        [Op.like]: `%${search}%`
                    }
                },
                {
                    email: {
                        [Op.like]: `%${search}%`
                    }
                },
                {
                    address: {
                        [Op.like]: `%${search}%`
                    }
                }
            ]
        }

        const order = await Order.findAll(options);
        return order;
    }

    async updateStatus(statusItem) {
        const newStatusItem = await Order.update(statusItem, {where: {id: statusItem.id}, raw: true});
        return newStatusItem;

    }

}

module.exports = new OrderRepository();