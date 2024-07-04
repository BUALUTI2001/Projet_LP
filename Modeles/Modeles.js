
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
  designation: {
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

//COMPTES
const Compte = sequelize.define('Compte', {
 
  id: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  nom: {
    type: DataTypes.STRING,
    allowNull: false
  },
  postnom: {
    type: DataTypes.STRING,
    allowNull: false
  },
  prenom: {
    type: DataTypes.STRING,
    allowNull: false
  },
  telephone: {
    type: DataTypes.STRING,
    allowNull: false
  },
  email: {
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
    type: Sequelize.STRING
  },
  
});
//ETUDIANT
const Etudiant = sequelize.define('etudiant', {
  id: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true
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
  objet: {
    type: Sequelize.STRING
  },
  message: {
    type: Sequelize.STRING
  },
  data: {
    type: Sequelize.BLOB
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
    type: Sequelize.BOOLEAN
  },
});
//COUPON

const Coupon = sequelize.define('coupon', {
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

//ANNNE
const AnneAcademique = sequelize.define('role', {
  id: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  designation: {
    type: Sequelize.STRING
  },
  
});
/**
 * ****************************************ETABLISSEMENT DES RELATIONS***********************************
 * ******************************************************************************************************
 * 
 */
//departement--promotion
Departement.hasMany(Promotion);
Promotion.belongsTo(Departement);

//paiement etudiant
Etudiant.hasOne(Paiement, { foreignKey: 'id_etudiant' })
Paiement.belongsTo(Etudiant, { foreignKey: 'id_etudiant' }); // Une promotion appartient à un département

//promotion etudiant
Promotion.hasMany(Etudiant, { foreignKey: 'id_promotion' })
Etudiant.belongsTo(Promotion, { foreignKey: 'id_promotion' }); 
//paiement --anne academique
AnneAcademique.hasMany(Paiement,{ foreignKey: 'id_anneacademique' })
Paiement.belongsTo(AnneAcademique, { foreignKey: 'id_anneacademique' });

//mail--compte
Compte.hasMany(Mail);
Mail.belongsTo(Compte);

//commentaire--compte
Compte.hasMany(Commentaire);
Commentaire.belongsTo(Compte);

//news--compte
Compte.hasMany(News,{ foreignKey: 'id_compte' });
News.belongsTo(Compte,{ foreignKey: 'id_compte' });

//coupon -- paiement
AnneAcademique.hasMany(Coupon,{ foreignKey: 'id_annee' });
Coupon.belongsTo(AnneAcademique,{ foreignKey: 'id_annee' });

//coupon -- paiement
Etudiant.hasOne(Coupon,{ foreignKey: 'id_etudiant' });
Coupon.belongsTo(Etudiant,{ foreignKey: 'id_etudiant' });

//coupon -- paiement
Compte.hasOne(Role,{ foreignKey: 'id_role' });
Compte.belongsTo(Role,{ foreignKey: 'id_role' });


/**
 * ****************************************SYNCHRONISATION DE LA DATABASE***********************************
 * *********************************************************************************************************
 * 
 */
Promotion.sync({alter:true}).then(() => {
  console.log('Base de données synchronisée');
}).catch(err => {
  console.error('Erreur lors de la synchronisation de la base de données :', err);
});

Departement.sync({alter:true}).then(() => {
    console.log('Base de données synchronisée');
  }).catch(err => {
    console.error('Erreur lors de la synchronisation de la base de données :', err);
  });


  Compte.sync({alter:true}).then(() => {
    console.log('Base de données synchronisée');
  }).catch(err => {
    console.error('Erreur lors de la synchronisation de la base de données :', err);
  });

  Role.sync({alter:true}).then(() => {
    console.log('Base de données synchronisée');
  }).catch(err => {
    console.error('Erreur lors de la synchronisation de la base de données :', err);
  });

  Commentaire.sync({alter:true}).then(() => {
    console.log('Base de données synchronisée');
  }).catch(err => {
    console.error('Erreur lors de la synchronisation de la base de données :', err);
  });

  News.sync({alter:true}).then(() => {
    console.log('Base de données synchronisée');
  }).catch(err => {
    console.error('Erreur lors de la synchronisation de la base de données :', err);
  });

  Mail.sync({alter:true}).then(() => {
    console.log('Base de données synchronisée');
  }).catch(err => {
    console.error('Erreur lors de la synchronisation de la base de données :', err);
  });

Coupon.sync({alter:true}).then(() => {
    console.log('Base de données synchronisée');
  }).catch(err => {
    console.error('Erreur lors de la synchronisation de la base de données :', err);
  });

AnneAcademique.sync({alter:true}).then(() => {
    console.log('Base de données synchronisée');
  }).catch(err => {
    console.error('Erreur lors de la synchronisation de la base de données :', err);
  });

Etudiant.sync({alter:true}).then(() => {
    console.log('Base de données synchronisée');
  }).catch(err => {
    console.error('Erreur lors de la synchronisation de la base de données :', err);
  });

  Paiement.sync({alter:true}).then(() => {
    console.log('Base de données synchronisée');
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
    Coupon

  }