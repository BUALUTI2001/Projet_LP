
const Sequelize = require('sequelize');
const {DataTypes} = require('sequelize');
const sequelize =require('../config/database');

/**
 * ****************************************DEFIFNTION DES MODELES***********************************
 * ******************************************************************************************************
 * 
 */

/*
//DEPARTEMENT
const Departement = sequelize.define('departement', {
  id: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  departement: {
    type: Sequelize.STRING
  },
  
});

//PROMOTION
const Promotion = sequelize.define('Promotion', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  promotion: {
    type: DataTypes.STRING
  },
  id_departement:{
    type: DataTypes.INTEGER
  }
 
});

// ADMINISTRATEUR
const Administrateur = sequelize.define('Administrateur', {
 
  id: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  Nom: {
    type: Sequelize.STRING
  },
  PostNom: {
  
    type: Sequelize.STRING
  },
  Prenom: {
    type: Sequelize.STRING
  },
 
  id_compte:{
    type: Sequelize.INTEGER
  }
 
});

//ETUDIANT
const Etudiant = sequelize.define('Etudiant', {
  //Nom|PostNom	|Prenom	|Statut	|Sexe	|InscriptionSpeciale|	Promotion
  id: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  Nom: {
    type: Sequelize.STRING
  },
  PostNom: {
  
    type: Sequelize.STRING
  },
  Prenom: {
    type: Sequelize.STRING
  },
  Statut: {
    type: Sequelize.STRING
  },
  Sexe: {
    type: Sequelize.CHAR
  },
  InscriptionSpecial: {
    type: Sequelize.STRING
  },
  promotion: {
    type: Sequelize.STRING
  },
  id_promotion:{
    type: Sequelize.INTEGER
  },
  id_compte:{
    type: Sequelize.INTEGER
  }
  
});

//COMPTES
const Compte = sequelize.define('Compte', {
 //UserName || AdresseMail || password || telephone || password_Mail|| avatar
  id: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },

  UserName: {
    type: DataTypes.STRING,
    allowNull: false
  },

  AdresseMail: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
    validate: {
      isEmail: true
    }
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false
  },
  password_Mail: {
    type: DataTypes.STRING,
    allowNull: false
  },
  telephone: {
    type: DataTypes.STRING,
    allowNull: false
  },
  avatar: {
    type: DataTypes.BLOB('long'),
    allowNull: false
  },
  id_role:{
    type: DataTypes.INTEGER
  }

});

//ROLES
const Role = sequelize.define('role', {
  id: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  designation: {
    type: Sequelize.STRING,
    unique: true,
  },
  
});


//NEWS
const News = sequelize.define('News', {
  id: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  message: {
    type: Sequelize.STRING
  },
  data:{
    type:Sequelize.BLOB('long')
  },
  id_compte:{
    type: Sequelize.INTEGER
  }

});
//COMMENTAIRE
const Commentaire = sequelize.define('Commentaire', {
  id: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true
},
  object: {
    type: Sequelize.STRING
  },
  id_compte:{
    type: Sequelize.INTEGER
  }

});

//MAIL
const Mail = sequelize.define('mail', {
  id: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  destinataire: {
    type: Sequelize.STRING,
    validate: {
      isEmail: true
    }
  },
  objet: {
    type: Sequelize.STRING
  },
  message: {
    type: Sequelize.STRING
  },
  data: {
    type: Sequelize.BLOB('long')
  },
  id_compte:{
    type: Sequelize.INTEGER
  }

});

//PAIEMENT 
const Paiement = sequelize.define('Paiement', {
  id: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },

  frais: {
    type: DataTypes.BOOLEAN,
    defaultValue: false
  },
  id_etudiant:{
    type: DataTypes.INTEGER
  },
  id_anneacademique:{
    type: DataTypes.INTEGER
  }

});

//COUPON
const Coupon = sequelize.define('coupon', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  designation: {
    type: DataTypes.STRING
  },
 
  data: {
    type: DataTypes.BLOB('long')
  },
  id_annee:{
    type: Sequelize.INTEGER
  },
  id_etudiant:{
    type: Sequelize.INTEGER
  }

});

//ANNNE
const AnneAcademique = sequelize.define('AnneeAcademique', {
  id: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  designation: {
    type: Sequelize.STRING
  },

});

//COURS
const Cours = sequelize.define('cours', {
  id: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  designation: {
    type: Sequelize.STRING
  },
  theorie: {
    type: Sequelize.INTEGER
  },
  pratique: {
    type: Sequelize.INTEGER
  },
  id_Promotion:{
    type: Sequelize.INTEGER
  }
});






Etudiant.sync({alert:true}).then(() => {
    
}).catch(err => {
  console.error('Erreur lors de la synchronisation de la base de données :', err);
});

Compte.sync({alert:true}).then(() => {
   
}).catch(err => {
  console.error('Erreur lors de la synchronisation de la base de données :', err);
});

Promotion.sync({alert:true}).then(() => {
  
}).catch(err => {
  console.error('Erreur lors de la synchronisation de la base de données :', err);
});

Departement.sync({alert:true}).then(() => {
    
  }).catch(err => {
    console.error('Erreur lors de la synchronisation de la base de données :', err);
  });

  Role.sync({alert:true}).then(() => {
    
  }).catch(err => {
    console.error('Erreur lors de la synchronisation de la base de données :', err);
  });

  Commentaire.sync({alert:true}).then(() => {
    
  }).catch(err => {
    console.error('Erreur lors de la synchronisation de la base de données :', err);
  });

  News.sync({alert:true}).then(() => {
    
  }).catch(err => {
    console.error('Erreur lors de la synchronisation de la base de données :', err);
  });

  Mail.sync({alert:true}).then(() => {
    
  }).catch(err => {
    console.error('Erreur lors de la synchronisation de la base de données :', err);
  });

Coupon.sync({alert:true}).then(() => {
    
  }).catch(err => {
    console.error('Erreur lors de la synchronisation de la base de données :', err);
  });

AnneAcademique.sync({alert:true}).then(() => {
    
  }).catch(err => {
    console.error('Erreur lors de la synchronisation de la base de données :', err);
  });


  Paiement.sync({alert:true}).then(() => {
    
  }).catch(err => {
    console.error('Erreur lors de la synchronisation de la base de données :', err);
  });

  Cours.sync({alert:true}).then(() => {

  }).catch(err => {
    console.error('Erreur lors de la synchronisation de la base de données :', err);
  });

  Administrateur.sync({alert:true}).then(() => {

  }).catch(err => {
    console.error('Erreur lors de la synchronisation de la base de données :', err);
  });

  module.exports ={
    sequelize,
    Promotion,
    Departement,
    Paiement,
    Compte,
    Role,
    News,
    Commentaire,
    Mail,
    AnneAcademique,
    Coupon,
    Etudiant,
    Cours,
    //Horaire,
    Administrateur
  }

  */