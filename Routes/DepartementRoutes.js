const express = require('express');
const multer =require('multer');

const DepartementRouter = express.Router();
const Departementcontroller =require('../Controlleur/DepartementController');

DepartementRouter.get('/dep',Departementcontroller.getOneDepartement);

module.exports =DepartementRouter;