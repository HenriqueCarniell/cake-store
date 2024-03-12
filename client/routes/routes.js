const express = require('express');
const Router = express.Router();

//Controllers 
const saveLoginData = require('../controllers/saveLoginData');
const saveCreateData = require('../controllers/saveCreateData');

//API
Router.post('/send/login/dados', saveLoginData.Login);
Router.post('/send/createaccount/dados', saveCreateData.Create);

module.exports = Router;