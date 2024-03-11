const express = require('express');
const { Route } = require('react-router-dom');
const Router = express.Router();

//Controllers 
const saveLoginData = require('../controllers/saveLoginData');

//API
Router.post('/send/login/dados', saveLoginData.Login);

module.exports = Router;