const express = require('express');
const Adminrouter = express.Router();
const path =require('path')
const multer =require('multer');

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
const MailController =require('../Controlleur/MailController')

//MISE EN PLACE DES ROUTES POUR ADMINISTRATEUR


Adminrouter.post('/uploadCours',upload.single('cours'), CoursController.UP_LOAD_Cours);
Adminrouter.get('/getCoupon/', CouponControleur.getAllCoupon);
Adminrouter.get('/downloadCoupon/:id', CouponControleur.DOWNLOAD_Coupon);//telecharger un coupon
Adminrouter.post('/uploadManyCoupon',upload.array('coupon',10), CouponControleur.UpLoad_Coupon);//Route pour uploder plusieurs PDF
Adminrouter.get('/students/promotion/:id', AdminControleur.getStudentsBy_Promotion);

//      LOGIN
Adminrouter.post('/login', loginController.login);//Authentification
Adminrouter.get('/loginForm/', loginController.getLoginForm);// Recuperation de la page de login
Adminrouter.get('/dashboard/', loginController.getDashboardForm);//Pour diriger l'admin au dashboard

//      INITIALISATION DATABASE
/**
 * REMARQUE: Dans la routes /uploadStudents nous avons integré directements la fonction d'initialisations des quelques tables supplementaire; notament
 *      -npm
 *      -
 */
Adminrouter.post('/uploadStudents',upload.single('listeExcelEtudiant'), AdminControleur.UP_LOAD_ListeEtudiant);//Route pour uploder fichier EXCEL des etudiant
Adminrouter.get('/InitialisationPaie',AdminControleur.Initilisation_Paiement) //pour initialiser la table des paiements
Adminrouter.get('/promoEtudiant',AdminControleur.Initilisation_Etudiant_Promotion)
Adminrouter.get('/InitialisationRoles',AdminControleur.Initilisation_Roles)//pour la creation des roles 
Adminrouter.get('/compteRole',AdminControleur.Initilisation__RoleCompte)//pour affecter les roles aux comptes


//      GESTION DES ETUDIANTS (OPERATIONS CRUD)
Adminrouter.get('/students/', EtudiantControleur.getAllStudents); //SELECTION DES TOUS ETUDIANTS
Adminrouter.get('/students/edit/:id', EtudiantControleur.getEditStudentForm); //Récuperation du formulaire de modification etudiant
Adminrouter.post('/students/edit/:id', EtudiantControleur.updateStudent); //Modification de l'etudiant
Adminrouter.post('/students/create', EtudiantControleur.createStudent); //Creation d'un seul etudiant
Adminrouter.get('/students/delete/:id', EtudiantControleur.deleteStudent); //supression d'un etudiant
Adminrouter.get('/getByPromo',AdminControleur.getStudentsBy_Promotion)

//      GESTION DES ADMINS (OPERATIONS CRUD)
Adminrouter.get('/Createadmin/', AdminControleur.createAdmin); //pour creer un administrateur
Adminrouter.post('/editAdmin:id',AdminControleur.updateAdmin) //Pour modifier l'identite d'un admin
Adminrouter.post('/deleteAdmin/:id',AdminControleur.deleteAdmin) //Pour modifier l'identite d'un admin



//      GESTION DES COMPTES
Adminrouter.post('/uploadAvatar/:id',upload.single('profil'),CompteController.Upload_Avatart)//creation des comptes etudiants par defauts
Adminrouter.get('/allComptes',CompteController.getAllcompte) //recuperation de tous les comptes
Adminrouter.get('/CreerComptesParDefauts',CompteController.creer_Defaultcompte_ETUDIANT)//pour creer les comptes etudiants par defaut
Adminrouter.get('/CreerCompteEtudiant/:id',CompteController.creer_compte_Etdudiant)//pour creer les comptes etudiants par defaut
Adminrouter.get('/selectCompte/:id',CompteController.getOneCompte)//pour creer les comptes etudiants par defaut

//      UPLOD DES COUPONS ET PAIMENT
Adminrouter.get('/validerPaiement/:id',FraisControlleur.Valider_Paiement ); //valider paiement via un bouton
Adminrouter.post('/validerPaiement',upload.single('paiement'), FraisControlleur.ValiderPaiement_EXCEL);//valider le paiement via fichier excel

//      GESTION DANS MAILS
Adminrouter.post('/sendMailToAllStudent',MailController.sendMailToAllStudent)
Adminrouter.post('/sendEmailToOneStudent:id',MailController.sendEmailToOneStudent)

//      GESTION DES COURS
Adminrouter.post('/uploadCours',CoursController.UP_LOAD_Cours)


module.exports =Adminrouter;