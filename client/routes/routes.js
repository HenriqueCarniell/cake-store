const express = require('express');
const Router = express.Router();
const upload = require('../multer/multerConfig');

//Controllers 
const saveLoginData = require('../controllers/saveLoginData');
const saveCreateData = require('../controllers/saveCreateData');
const saveDataProduct = require('../controllers/sendDataProduct');
const getDataProduct = require('../controllers/getDataProduct');
const putDataProduct = require('../controllers/putDataProduct');

//API
Router.post('/send/login/dados', saveLoginData.Login);
Router.post('/send/createaccount/dados', saveCreateData.Create);
Router.get('/get/data/product', getDataProduct.getDataProduct);
Router.delete('http://localhost:4000/alter/admin/itens/:id', putDataProduct.alterData)

//Multer middleware
Router.post('/send/data/product', upload.single('filename'), saveDataProduct.SendDataProduct);

module.exports = Router;