const orderRepositories = require('../repositories/orderRepository');

class OrderService {
    async createOrder(order) {
        const newOrder = await orderRepositories.createOrder(order);

        return newOrder;
    }

    async getAll(limit,offset,search) {
        const orderItem = await orderRepositories.getAll(limit,offset,search);
        return orderItem;
    }

}

module.exports = new OrderService();