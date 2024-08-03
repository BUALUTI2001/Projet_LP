const fs =require('fs');
const path = require('path');
 const xlsx =require('xlsx');

const { Compte, Role, Promotion, Etudiant, Paiement, Coupon, Administrateur } = require("../Modeles/Modeles");
//const { Compte, Role, Promotion, Etudiant, Paiement, Coupon, Administrateur } = require("../Modeles/tables");
const { where } = require('sequelize');



/*
 * **************************QUELQUES FONCTIONNALITES de L'ADMIN*************************
 * **************************************************************************************
 */


//INSERTION DES ETUDIANTS
exports.UP_LOAD_ListeEtudiant = async (req, res) => {
  
  try {
      const uploadsDir = path.join(__dirname, '/uploads/');
      console.log(`uploadDir: ${uploadsDir}`)
   
      const excelFilePath =path.join(`uploads/${req.file.filename}`);
      console.log(`excelFilePath: ${excelFilePath}`)
    
      //lecture du fichier excel
      const workbook =xlsx.readFile(excelFilePath);
      const sheetName =workbook.SheetNames[0];//le nom de la feuille à l'interieur du fichier excell
      console.log(`sheetName: ${sheetName}`)
      const workSheet =workbook.Sheets[sheetName];

      const data =xlsx.utils.sheet_to_json(workSheet);

      for (const row of data) {
        try {
          const [etudiant, created] = await Etudiant.findOrCreate({
            where: {
              Nom: row.Nom,
              PostNom: row.PostNom,
              promotion: row.Promotion
            },
            defaults: {
              Prenom: row.Prenom,
              Statut: row.Statut,
              Sexe: row.Sexe,
              InscriptionSpeciale: row.InscriptionSpeciale,
            }
          });
      
          if (created) {
            console.log(`Nouvel étudiant créé :ID:${etudiant.id} || Nom:${etudiant.Nom}||PostNom: ${etudiant.Prenom}`);
          } else {
            console.log(`Etudiant mis à jours :ID:${etudiant.id} || Nom:${etudiant.Nom}||PostNom: ${etudiant.Prenom}`);
            // Vous pouvez ici mettre à jour les autres champs de l'étudiant existant
            await etudiant.update({
              Statut: row.Statut,
              Sexe: row.Sexe,
              InscriptionSpeciale: row.InscriptionSpeciale,
              promotion: row.Promotion
            });
          }
        } catch (err) {
          console.error('Erreur lors de l\'insertion d\'une ligne :', err);
          
        }
      }
 
     //INITIALIASATION DE LA TABLE PROMOTION
      this.Initilisation_PROMOTION();
      this.Initilisation_Etudiant_Promotion()

      //INITIALIASATION DE LA TABLE PAIEMENT
      this.Initilisation_Paiement();

      //INITIALISATION DE LA TABLE ROLE
      this.Initilisation_Roles();

      //INITIALISATION DES ROLES DES ETUDIANTS
      //this.Initilisation__RoleCompte()

      //res.redirect('/data/students/')
      //res.redirect('/');
      console.log('imporation avec succes!');

  } catch (err) {
    console.error('Erreur lors de la récupération  :', err);
    res.status(500).send('Erreur Serveur');
  } finally {
      try {
        fs.unlinkSync(excelFilePath);
        console.log('Fichier supprimé avec succès');
      } catch (err) {
        console.error('Erreur lors de la suppression du fichier :', err);
      }
  }
};

//INSERTION DES PROMOTIONS
exports.Initilisation_PROMOTION = async (req, res) =>{
  try {
    
    const promotions = await Etudiant.findAll({
      attributes: ['promotion'],
      group: ['promotion']
    });

    try {
      for (const row of promotions) {
        
        const [promo, created] = await Promotion.findOrCreate({
          where: {
            promotion: row.promotion
          },
          defaults: {
            promotion: row.promotion
          }
        });
        
        if(created){
          console.log(`created:${created}`)
        }else{
          await promo.update({
            promotion: row.promotion
          });
        }
      }
      console.log('Importation des promotions réussie avec succès!');

    } catch (error) {
      console.log(error);
    }

    
    /*
    for(const row of getPromotion){
      await Promotion.create({
         
        promotion:row.Promotion})
    }
    */
   console.log('Importation reussie avec succes!')
    } catch (error) {
      console.log(error)
    }
      
};

//FILTRER PAR PROMOTION
exports.getStudentsBy_Promotion = async (req, res) => {
  try {

      const promo = await Promotion.findByPk(req.params.id)
      const studentPromo = await DataVDE.findAndCountAll({where:{Promotion:promo.promotion}})
      const effectif_Promotion =await  studentPromo.count;//donne l'effectif de la promo
      console.log(`effectif_Promotion: ${effectif_Promotion}`)
      //lorsqu'on utilise findAndCountAll on est obligé de mettre  object.rows
      res.render('data/listePromo', { studentPromo:studentPromo.rows });

  } catch (err) {
    console.error('Erreur lors de la récupération des étudiants :', err);
    res.status(500).send('Erreur Serveur');
  }
};

//INITIALISER LA FICHE DE PAIEMENT
exports.Initilisation_Paiement= async (req, res) =>{
   try {

    const id_etudiants = await Etudiant.findAll({
      attributes: ['id'],
      group: ['id']
    });
    console.log(`id_etudiants: ${id_etudiants}`)
    
    for(const Student_ID of id_etudiants){

      try {

        const[Etudiant_ID, ID_Added]= await Paiement.findOrCreate({

          where:{
            //id_etudiant(nom de la varialble dans la table paiement):Student_ID(element de la boucle faisant references aux ids de la table etudiant).id(nom colone )
            id_etudiant:Student_ID.id
          },
          defaults:{
            id_etudiant:Student_ID.id
          }
        });
        
      } catch (error) {
        console.log(error)
      }
    }
    console.log('Table Paiement initialisée avec succes!')
   } catch (error) {
    console.log(`Erreur d\'initialisation de la fiche de Paiement: ${error}`)
   }
}

//INITIALISER LA FICHE DE PAIEMENT
exports.Initilisation_Etudiant_Promotion= async (req, res) =>{
  try {

   const AllStudent = await Etudiant.findAll({
     attributes: ['id'],
     group: ['id']
   });
   
   
   for(const etudiant of AllStudent){
    const getID_Promo =await Promotion.findOne({where:{promotion:etudiant.promotion}})
     try {

       const[Etudiant_ID, ID_Added]= await Etudiant.update({id_promotion:getID_Promo}, {where:{id:etudiant.id}});
       
     } catch (error) {
       console.log(error)
     }
   }
   console.log('Colone id_Promotion initialisée avec succes!')
  } catch (error) {
   console.log(`Erreur d\'initialisation de la fiche de Paiement: ${error}`)
  }
}
//creation des Roles par defauts
exports.Initilisation_Roles= async (req, res) =>{
  try {
     // Définition des rôles à insérer
    const roles = [{ designation: 'ADMIN' },{ designation: 'ETUDIANT' }];
    console.log(`roles--:${roles}`)

    // Insertion des rôles dans la table Roles
    for (const roleToInsert of roles) {
      
      const[roleInTable,Role_Added] = await Role.findOrCreate({
        where: {designation: roleToInsert.designation },
        defaults: {designation: roleToInsert.designation}
      });
    }
  } catch (error) {
    console.log(`Erreur d\'initialisation de la table Role: ${error}`)
  }
}
//INITIALISER LA LE ROLE DE ETUDIANT
exports.Initilisation__RoleCompte= async (req, res) =>{
  try {
   const role_Etudiant= await Role.findOne({where:{designation:'ETUDIANT'}});
   
   const role_Admin= await Role.findOne({where:{designation:'ADMIN'}});
   const All_copmteEtudiants = await Compte.findAll();
   
    for(const account of All_copmteEtudiants){
      const ID_role =role_Etudiant.id
      
      if(account.id_role===null){
        const etudiant_Role = await Compte.update({id_role:ID_role},{where:{id:account.id}})
      }
   }
   console.log('Role de l\'etudiant initialisé avec succes!')
  } catch (error) {
   console.log(`Erreur d\'initialisation du Role de l'etudiant ${etudiant_Role.Nom, etudiant_Role.PostNom}: ${error}`)
  }
}


/*
 * **************************CRUD CLASSIQUE DANS LA TABLE ADMIN*************************
 * *************************************************************************************
 */

exports.getCreateAdminForm = async (req, res) => {

  const administrateur = await Administrateur.findAll({});
  //res.render('data/create',{promotions});
};

exports.createAdmin = async (req, res) => {
  try {
    const {Nom,PostNom,Prenom,telephone,AdresseMail}=req.body;

    //const promo =await Promotion.findByPk(Idpromotion)
    await Administrateur.create({Nom,PostNom,Prenom,telephone,AdresseMail});
    //res.redirect('/data/students'); 
  } catch (err) {
    console.error('Erreur lors de la création de l\'admin :', err);
    //res.status(500).send('Erreur Serveur');
  }

};

exports.getEditAdminForm = async (req, res) => {
  try {
    console.log(req.params.id);
    const admin = await Administrateur.findByPk(req.params.id);
    if (!admin) {
        res.status(404).send('Etudiant non trouvé');
        return;
      }
    //res.render('etudiant/edit', { student });
  } catch (err) {
    console.error('Erreur lors de la récupération de l\'étudiant pour édition :', err);
    res.status(500).send('Erreur Serveur');
  }
};

exports.updateAdmin = async (req, res) => {
  try {
    const{id}=req.params;
    console.log(id);
    const {Nom,PostNom,Prenom,telephone,AdresseMail}=req.body;
   
    const updated_Admin = await Administrateur.update(
        {
            Nom:Nom,
            PostNom:PostNom,
            Prenom:Prenom,
            telephone:telephone,
            AdresseMail:AdresseMail,

        }, {where: { id } });
    console.log(`Administrateur mis à jour : ${updated_Admin}`);

    //res.redirect('/etudiant/students');
  } catch (err) {
    console.error('Erreur lors de la mise à jour de l\'administrateur :', err);
    res.status(500).send('Erreur Serveur');
  }
};

exports.deleteAdmin = async (req, res) => {
  try {
    const { id } = req.params;
    await Administrateur.destroy({ where: { id } });
    //res.redirect('/etudiant//students');
  } catch (err) {
    console.error('Erreur lors de la suppression de l\'admin :', err);
    res.status(500).send('Erreur Serveur');
  }
};