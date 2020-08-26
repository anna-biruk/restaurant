const express = require('express');
const app = express();
const cors = require('cors');
const path = require('path');
const userController = require('./controllers/menuController');

app.use(cors());
app.use(express.static(path.resolve().replace('server', 'build')));
app.get('/api/menu', userController.getAll);

app.get('*',(req,res)=>{
    res.sendFile(path.resolve().replace('server', 'build/index.html'))
});

app.listen(3000, function() {
    console.log('Running');
});