
const express = require('express');

const path =require('path')
const multer =require('multer');
const LoginRouter = express.Router();



const loginController = require('../Controlleur/LoginCOntroller');

//          LOGIN ET AUTHENTIFICATION
LoginRouter.get('/login',loginController.getLoginForm);//recuperation de la page d'authentification
LoginRouter.post('/login',loginController.login);//procede à l'authentification de l'etudiant
LoginRouter.get('/loginForm',loginController.getLoginForm)
module.exports = LoginRouter;
