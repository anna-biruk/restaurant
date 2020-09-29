const orderService = require('../services/orderService');

class OrderController {
    async createOrder(req, res) {
        const {name, prefix, phone, address, email, note, payment, menuItems, totalPrice, status = 'pending'} = req.body;
        const newOrder = await orderService.createOrder({
            name,
            prefix,
            phone,
            address,
            email,
            note,
            payment,
            status,
            menuItems,
            totalPrice
        });
        res.json(newOrder);

    }

    async getAll(req, res) {
        const {limit = 10, offset = 0, search = ''} = req.query;
        const newOrder = await orderService.getAll(Number.parseInt(limit), Number.parseInt(offset), search);
        res.json(newOrder);
    }

    async getById(req, res) {
        const {id} = req.params;
        const order = await orderService.getById(id);
        res.json(order);
    }

    async updateStatus(req, res) {
        const {status,id} = req.body;
        const newUpdateStatus = await orderService.updateStatus({status,id});
        res.json(newUpdateStatus);
    }
}

module.exports = new OrderController();