const express = require('express');
const app = express();
const path = require('path');
const sequelize = require('./config/database');
const Departement = require('./Modeles/Departement');


app.use(express.static('public'));

// Middleware pour parser le corps des requêtes
app.use(express.json());
app.use(express.urlencoded({ extended: false }));


//routes
const DepartementRouter =require('./Routes/DepartementRoutes');

app.use('/depa/', DepartementRouter);
// Démarrage du serveur
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Serveur démarré sur le port ${PORT}`);
  console.log(`connectez vous à l'adresse:  http://localhost:${PORT}`);
});