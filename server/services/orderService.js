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

    async getById(id) {
        const orderItem = await orderRepositories.getById(id);
        return orderItem;
    }
    async updateStatus(statusItem){
        const newStatusItem=await orderRepositories.updateStatus(statusItem);
        return newStatusItem;

    }

}

module.exports = new OrderService();