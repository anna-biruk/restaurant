const express = require('express');
const app = express();
const cors = require('cors');
const path = require('path');
const bodyParser = require('body-parser');
const sequelize = require('../database/db.context');
const menuController = require('./controllers/menuController');
const orderController = require('./controllers/orderController');
const adminController = require('./controllers/adminController');

app.use(cors());
app.use(express.static(path.resolve().replace('server', 'build')));
app.use(bodyParser.json({limit: '200mb'}));
app.get('/api/menu', menuController.getAll);
app.post('/api/menu', menuController.createMenu);
app.put('/api/menu', menuController.updateMenuItem);
app.post('/api/order', orderController.createOrder);
app.post('/session', adminController.createSession);
app.get('/api/order', orderController.getAll);
app.get('/api/order/:id', orderController.getById);
app.put('/api/order', orderController.updateStatus);


app.get('*', (req, res) => {
    res.sendFile(path.resolve().replace('server', 'build/index.html'))
});

app.listen(process.env.PORT || 3000, function () {
    sequelize.authenticate().then(() => {
        sequelize.sync({force: false});
        console.log('Connection has been established successfully.');
    });
    console.log(`Running on port ${process.env.PORT || 3000}`);
});