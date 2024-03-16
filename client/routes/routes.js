const express = require('express');
const Router = express.Router();
const upload = require('../multer/multerConfig');

//Controllers 
const saveLoginData = require('../controllers/saveLoginData');
const saveCreateData = require('../controllers/saveCreateData');
const saveDataProduct = require('../controllers/sendDataProduct');
const getDataProduct = require('../controllers/getDataProduct');

//API
Router.post('/send/login/dados', saveLoginData.Login);
Router.post('/send/createaccount/dados', saveCreateData.Create);
Router.get('/get/data/product', getDataProduct.getDataProduct);
Router.post('/send/data/product', upload.single('file'), saveDataProduct.SendDataProduct);

module.exports = Router;