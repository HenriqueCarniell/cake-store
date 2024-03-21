const express = require('express');
const Router = express.Router();
const upload = require('../multer/multerConfig');

//Controllers 
const saveLoginData = require('../controllers/saveLoginData');
const saveCreateData = require('../controllers/saveCreateData');
const saveDataProduct = require('../controllers/sendDataProduct');
const getDataProduct = require('../controllers/getDataProduct');
const deleteDataProduct = require('../controllers/deleteDataProduct');
const UpdateDataProduct = require('../controllers/updateNewDataProduct');

//API
Router.post('/send/login/dados', saveLoginData.Login);
Router.post('/send/createaccount/dados', saveCreateData.Create);
Router.get('/get/data/product', getDataProduct.getDataProduct);
Router.delete('/delete/admin/itens/:id', deleteDataProduct.deleteData);
Router.put('/send/new/data/product/:idProduto', UpdateDataProduct.AlterDataProduct);

//Multer middleware
Router.post('/send/data/product', upload.single('filename'), saveDataProduct.SendDataProduct);

module.exports = Router;