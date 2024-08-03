
const Sequelize = require('sequelize');
const {DataTypes} = require('sequelize');
const sequelize =require('../config/database');

/**
 * ****************************************DEFIFNTION DES MODELES***********************************
 * ******************************************************************************************************
 * 
 */

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
 
});

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
 
});
//En fonction de la liste venant du VDE

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
  }
});

//COMPTES
const Compte = sequelize.define('Compte', {
 
//UserName || AdresseMail || password || telephone || password_Mail|| avatar
 
  id: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true
  }, UserName: {
    type: DataTypes.STRING,
  },

  AdresseMail: {
    type: DataTypes.STRING,
    validate: {
      isEmail: true
    }
  },
  password: {
    type: DataTypes.STRING,
  },
  password_Mail: {
    type: DataTypes.STRING,
  },
  telephone: {
    type: DataTypes.STRING,
  },
  avatar: {
    type: DataTypes.BLOB('long'),
  },

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
  /*
  session: {
    type: Sequelize.STRING
  },
  */
  data: {
    type: DataTypes.BLOB('long')
  },

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
});

/*
const Horaire = sequelize.define('horaire', {
  id: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  designation: {
    type: Sequelize.STRING
  },
  session: {
    type: Sequelize.STRING
  },
  data: {
    type: Sequelize.BLOB
  },
});

*/

/**
 * ****************************************ETABLISSEMENT DES RELATIONS***********************************
 * ******************************************************************************************************
 * 
 */



//departement--promotion
Departement.hasMany(Promotion, { foreignKey: 'id_departement' });
Promotion.belongsTo(Departement, { foreignKey: 'id_departement' });

//promotion etudiant
Promotion.hasMany(Etudiant, { foreignKey: 'id_promotion' })
Etudiant.belongsTo(Promotion, { foreignKey: 'id_promotion' }); 

//Etudiant--compte
Compte.hasOne(Etudiant,{ foreignKey: 'id_compte' });
Etudiant.belongsTo(Compte,{ foreignKey: 'id_compte' });

//paiement etudiant
Etudiant.hasOne(Paiement, { foreignKey: 'id_etudiant' })
Paiement.belongsTo(Etudiant, { foreignKey: 'id_etudiant' }); // Une promotion appartient à un département


//paiement --anne academique
AnneAcademique.hasMany(Paiement,{ foreignKey: 'id_anneacademique' })
Paiement.belongsTo(AnneAcademique, { foreignKey: 'id_anneacademique' });

//mail--compte
Compte.hasMany(Mail,{ foreignKey: 'id_compte' });
Mail.belongsTo(Compte,{ foreignKey: 'id_compte' });

//commentaire--compte
Compte.hasMany(Commentaire,{ foreignKey: 'id_compte' });
Commentaire.belongsTo(Compte,{ foreignKey: 'id_compte' });

//news--compte
Compte.hasMany(News,{ foreignKey: 'id_compte' });
News.belongsTo(Compte,{ foreignKey: 'id_compte' });


//ADMINISTRATEUR--compte
Compte.hasOne(Administrateur,{ foreignKey: 'id_compte' });
Administrateur.belongsTo(Compte,{ foreignKey: 'id_compte' });

//coupon -- paiement
AnneAcademique.hasMany(Coupon,{ foreignKey: 'id_annee' });
Coupon.belongsTo(AnneAcademique,{ foreignKey: 'id_annee' });

//Etudiant -- paiement
Etudiant.hasOne(Coupon,{ foreignKey: 'id_etudiant' });
Coupon.belongsTo(Etudiant,{ foreignKey: 'id_etudiant' });

//Compte -- role
//Role.hasOne(Role,{ foreignKey: 'id_role' });
Compte.belongsTo(Role,{ foreignKey: 'id_role' });

//cours  -- promotion
Promotion.hasMany(Cours,{ foreignKey: 'id_Promotion' });
Cours.belongsTo(Promotion,{ foreignKey: 'id_Promotion' });

/*
//horaire  -- promotion
Promotion.hasOne(Horaire,{ foreignKey: 'id_role' });
Horaire.belongsTo(Role,{ foreignKey: 'id_role' });
*/

/**
 * ****************************************SYNCHRONISATION DE LA DATABASE***********************************
 * *********************************************************************************************************
 * 
 */

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
/*
  Horaire.sync().then(() => {

  }).catch(err => {
    console.error('Erreur lors de la synchronisation de la base de données :', err);
  });
  */
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