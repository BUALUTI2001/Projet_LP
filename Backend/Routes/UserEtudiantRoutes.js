

const express = require('express');

const path =require('path')
const multer =require('multer');
const Etudiantrouter = express.Router();

//INITIALISATION DE MULTER

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, 'uploads/'); // dossier où les fichiers seront enregistrés
    },
    filename: function (req, file, cb) {
      cb(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname));
    }
  });
  
  const upload = multer({ storage: storage });
  
 
//LES CONTROLEURS
const EtudiantControleur =require('../Controlleur/EtudiantController');
const AdminControleur = require('../Controlleur/AdminController');
const CouponControleur = require('../Controlleur/CouponContoller');
const FraisControlleur =require('../Controlleur/FraisController')
const loginController = require('../Controlleur/LoginCOntroller');
const CoursController =require('../Controlleur/CoursController')
const CompteController =require('../Controlleur/CompteController');


//MISE EN PLACE DES ROUTES POUR ETUDIANTS

//          LOGIN ET AUTHENTIFICATION
Etudiantrouter.get('/login',loginController.getLoginForm);//recuperation de la page d'authentification
Etudiantrouter.post('/login',loginController.login);//procede à l'authentification de l'etudiant

//          TELECHARGER COUPON
Etudiantrouter.get('/downloadCoupon/:id', CompteController.Download_CouponEtudiant);//telecharger un coupon


module.exports = Etudiantrouter;
