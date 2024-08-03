const { where, and } = require("sequelize");
const { Compte, Mail, Paiement, Coupon, Etudiant, Role } = require("../Modeles/Modeles");
//const { Compte, Mail, Paiement, Coupon, Etudiant, Role } = require("../Modeles/tables");
const { Op } = require('sequelize');
//const { loginController } = require("./LoginCOntroller");

const bcrypt =require('bcryptjs')


exports.creer_Defaultcompte_ETUDIANT = async (req, res) => {
  try {
    const roleEtudiant = await Role.findOne({ where: { designation: { [Op.like]: '%ETUDIANT%' } } });
    if (!roleEtudiant) {
      return res.status(404).json({ error: 'Le rôle "ETUDIANT" n\'a pas été trouvé' });
    }

    const etudiants = await Etudiant.findAll();//POUR TESTER { where: { promotion: '3GEI' } }

    for (const etudiant of etudiants) {
      const userName = `${etudiant.Nom}${etudiant.PostNom}${etudiant.id}`;

      const compteExistant = await Compte.findOne({ where: { UserName: userName } });
      if (!compteExistant) {
        const hashedPassword = await bcrypt.hashSync(userName, 8);
        const nouveauCompte = await Compte.create({
          UserName: userName,
          password: hashedPassword,
          id_role: roleEtudiant.id,
        });

        await Etudiant.update({ id_compte: nouveauCompte.id }, { where: { id: etudiant.id } });
        console.log(`Compte étudiant créé avec succès pour l'étudiant ${etudiant.Nom} ${etudiant.PostNom}`);
      } else {
        console.log(`Un compte existe déjà pour l'étudiant ${etudiant.Nom} ${etudiant.PostNom}`);
      }
    }

    //res.status(200).json({ message: 'Comptes étudiants créés avec succès' });
  } catch (error) {
    console.error('Erreur lors de la création des comptes étudiants :', error);
    res.status(500).json({ error: 'Une erreur est survenue lors de la création des comptes étudiants' });
  }
};

exports.creer_compte_ADMIN = async (req, res) =>{
//UserName || AdresseMail || password || telephone || password_Mail|| avatar
  try {
    // Définition des parametres du compte
    const UserName = 'ADMIN';
    const pass = 'ADMIN';
    let verificationID;
    let verificationUserName;
    const GetID_role =await Role.findOne({where:{designation: {[Op.like]: `%${UserName}%`}}})
     
    if(verificationID=await Compte.findOne({where:{id_role:GetID_role.id}})===null){
      try {
        const hashedPassword = await bcrypt.hashSync(pass, 8);
      // Insertion du rôles dans la table id_role
      const[compte,compte_Added] = await Compte.findOrCreate({
        where: {
          UserName: UserName ,
          password:hashedPassword
        },
        defaults: {
          id_role:GetID_role.id
        }
        });
        console.log(`Creation du compte admin  par defaut avec succes`)
      } catch (error) {
        console.log(`error||${error}`)
        res.status(200).json({ message: ` ${error}` });
      }
    }else{
      console.log(`le compte Admin existe déjà`)
      //res.status(200).json({ message: 'le compte Admin existe déjà' });
    }
    
  } catch (error) {
    console.log(`Erreur create default acount|| ${error}`)
    res.status(200).json({ message: `Erreur create default acount|| ${error}` });
  }
}

exports.creer_compte_Etdudiant = async (req, res) =>{
  try {
    const {Nom,PostNom,promotion}=req.body
    const etudiant = await Etudiant.findOne({where:{Nom:Nom,PostNom:PostNom,promotion:promotion}})
    if(!etudiant){
      res.status(200).json({ message: 'Comptes étudiants créés avec succès' });
      //res.redirect()
    }
    if(etudiant){
      //UserName || AdresseMail || password || telephone || password_Mail|| avatar
      const {UserName,AdresseMail,password,telephone}=req.body
      const hashedPassword = await bcrypt.hashSync(password, 8);
      const compte =await Compte.create({UserName,AdresseMail,password:hashedPassword,telephone})
      const updatedEtudiant =Etudiant.update({id_compte:compte.id},{id:etudiant.id})
      res.status(200).json({ message: 'Comptes étudiants créés avec succès' });
    }
    //res.redirect('/') //page de Login
  } catch (error) {
    res.status(400).json({ message: `Erreur de creation du compte etudiant|| ${error}` });
  }
}
exports.getAllcompte = async (req, res) => {
    try {
      const comptes = await Compte.findAll({});
      res.status(200).json({ comptes});   
    } catch (err) {
      console.error('Erreur lors de la récupération des étudiants :', err);
      res.status(404).json({ message: 'Erreur du serveur' });
    }
  };

exports.Upload_Avatart = async (req, res) =>{
    const{idUser}= req.params;
    console.log(`idUser: ${idUser}`)
    const uploadsDir = path.join(__dirname, '/uploads/');
    console.log(`uploadDir: ${uploadsDir}`)
   
    const ImageFilePath =path.join(`uploads/${req.file.filename}`);
    const acount =await Compte.update({Avatar:ImageFilePath},{ where: { id: idUser } })
    console.log(`Avatar mis à jour avec succes: ${re.file.orignalName}`)

  }

  exports.getOneCompte = async (req, res) => {
    try {
      const{id}=req.params;
      const acount = await Compte.findOne({where: { id: id }});//l'id est à recuperer par une requette http
      console.log(departement)
     
    } catch (err) {
      console.error('Erreur lors de la récupération des étudiants :', err);
      res.status(500).json({ message:'Erreur du serveur'});
    }
  };

  exports.updateCompte = async (req, res) => {
    try {
      const {UserName,AdresseMail, password,telephone } = req.body;
      const hashedPassword = await bcrypt.hashSync(password, 8);
      
      const{id}=req.params;
      
      const updatedCompted =await Compte.update({UserName,AdresseMail,telephone,avatar,password:hashedPassword});
      console.log(`compte mis à jour : ${updatedCompte}`);

    } catch (err) {
      console.error('Erreur lors de la mise à jour de l\'étudiant :', err);
      res.status(500).send('Erreur Serveur');
    }
  };
  
  exports.deleteCompte = async (req, res) => {
    try {
      const { id } = req.params;
      await Compte.destroy({ where: { id } });
      
    } catch (err) {
      console.error('Erreur lors de la suppression de l\'étudiant :', err);
      res.status(500).send('Erreur Serveur');
    }
  };


  /**
   * ********************LES FONCTIONNALITES DE CHAQUE COMPTES 
   */

  exports.Download_CouponEtudiant = async (req, res) => {
    try {
      //const {idUser} =req.params
      const { id_etudiant } = req.params;
      const frais_Etudiant = await Paiement.findOne({where:{id_etudiant:id_etudiant}})
      console.log(`frais: ${frais_Etudiant.frais}`)
      
      const etudiant = await Etudiant.findOne({ where: { id: id_etudiant } });
      console.log(`etudiant:${etudiant.Nom}`)
      
      if(frais_Etudiant.frais===false){
        console.log('Vous n\'etes pas en ordre avec le paiement')
        res.status(200).json({message:'Vous n\'etes pas en ordre avec le paiement'})
      }
      if(frais_Etudiant.frais===true){
        try {
          const couponFile = await Coupon.findOne({
            where: {
              designation: {[Op.like]: `%${etudiant.Nom} ${etudiant.PostNom}%`}

            }
          });
         
          if (!couponFile) {
            return res.status(200).json({message:'Fichier non trouvé.'});
          }
          res.setHeader('Content-Type', 'application/pdf');
          res.setHeader('Content-Disposition', `attachment; filename=" Coupon de ${couponFile.designation}"`);
          //res.status(200).json(couponFile.data)
          res.send(couponFile.data);
          console.log(`couponFile.data.length: ${couponFile.data.length}`)
          //res.redirect('/admin/getCoupon/') 
        } catch (error) {
          console.log(`erreur de telechargement: ${error}`);
        }
      }
  
    } catch (err) {
      console.error('Erreur lors du telechargement du coupon :', err);
      res.status(500).send('Erreur Serveur');
    }
  };


  exports.VoirPaiement = async (req, res) => {
    try {
      
      
      
    } catch (err) {
      console.error('Erreur lors de la suppression de l\'étudiant :', err);
      res.status(500).send('Erreur Serveur');
    }
  };