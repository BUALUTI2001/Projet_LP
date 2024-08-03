const express = require('express');
const app = express();
const path = require('path');
const sequelize = require('./config/database');
const { Departement, Compte, AnneAcademique, Administrateur } = require('./Modeles/Modeles');
//const { Departement, Compte, AnneAcademique, Administrateur } = require('./Modeles/tables');

app.use(express.static('public'));

// Middleware pour parser le corps des requêtes
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.set('views', path.join(__dirname, 'vue'));//'views'---par vues
app.set('view engine', 'ejs');


//END POINT

const Etudiantrouter = require('./Routes/UserEtudiantRoutes');
const Adminrouter = require('./Routes/AdminRoutes');
const LoginRouter = require('./Routes/LoginRoutes');

app.use('/admin/',Adminrouter);
app.use('/etudiant/',Etudiantrouter);
app.use('/auth/',LoginRouter)


//INITIALISATION DE LA DATABASE
const{Initilisation_Roles}=require('./Controlleur/AdminController')
const{creer_compte_ADMIN, creer_Defaultcompte_ETUDIANT}=require('./Controlleur/CompteController');


app.get('/', async (req, res, next) => {
  
  try {
    //Initialiser les roles
    await Initilisation_Roles(req,res);
    // Créer le compte ADMIN par défaut
    await creer_compte_ADMIN(req, res);
     
    res.status(200).render('home');
  } catch (error) {
    console.log(`error: ${error}`);
    next(error);
  }
});


//page html pour tester les routes
app.get("/home", (req,res)=>{
  //root: __direname------>permetv de retourner le repertoire racine du projet
  res.status(200).sendFile("test.html",{root: __dirname});
});



// Démarrage du serveur
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Serveur démarré sur le port ${PORT}`);
  console.log(`connectez vous à l'adresse:  http://localhost:${PORT}`);
});