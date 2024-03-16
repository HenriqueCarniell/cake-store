const express = require('express');
const Router = express.Router();

//Controllers 
const saveLoginData = require('../controllers/saveLoginData');
const saveCreateData = require('../controllers/saveCreateData');
const saveDataProduct = require('../controllers/sendDataProduct');
const getDataProduct = require('../controllers/getDataProduct');

//API
Router.post('/send/login/dados', saveLoginData.Login);
Router.post('/send/createaccount/dados', saveCreateData.Create);
Router.post('/send/data/product', saveDataProduct.sendDataProduct);
Router.get('/get/data/product', getDataProduct.getDataProduct);

module.exports = Router;