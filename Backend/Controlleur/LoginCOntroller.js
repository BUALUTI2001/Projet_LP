require('dotenv').config();
const jwt = require('jsonwebtoken');
const { where } = require('sequelize');
const bcrypt= require('bcryptjs')

const { Compte, Mail, Promotion, Etudiant, Role, Administrateur, Paiement } = require('../Modeles/Modeles');
//const { Compte, Mail, Promotion, Etudiant, Role } = require('../Modeles/tables');

const secretKey = process.env.secretKey;

exports.getLoginForm = async (req, res) => {
  
  try {
    // Créer le compte ADMIN par défaut
    //await creer_compte_ADMIN(req, res);

    // Renvoyer la page de login
    res.render('login');
  } catch (error) {
    console.error('Erreur lors de la création du compte ADMIN :', error);
    // Gérer l'erreur de manière appropriée, par exemple en envoyant une réponse d'erreur
    //res.status(500).send('Erreur lors de la création du compte ADMIN');
  }
    
  };

  exports.getDashboardForm = async (req, res) => {
    const { idUser, email } = req.user;//INFO VENANT DU MIDLWARE VERIFY TOKEN
    const role =await Compte.findOne({where:{id_role:idUser}})
    if(role===i){
      const etudiant =await Compte.findByPk ({where:{id:idUser}})
       console.log(`UTILISATEUR: UserName: ${etudiant.UserName}|| Password ${etudiant.id}`)
       res.render('dashboard',{etudiant});
    }else{
      console.log(`UTILISATEUR: UserName: ${etudiant.UserName}|| Password ${etudiant.id}`)
    }
    
    
  };
  exports.getRegisterForm = async (req, res) => {
    //pour recuperer la page d'incription au systeme
    //res.render('authentification/register');
  };

  exports.login = async (req, res) => {
  //Compte: UserName || AdresseMail || password || telephone || password_Mail|| avatar  
 
    try {
      const { UserName, password } = req.body;
      if(UserName ==="undefined" || password==="undefined"){
        console.log(`Veuiller remplir le champs User Name et Votre mot de passe`)
      }
      console.log(`UserName:${UserName}`);
      console.log(`password:${password}`);
      const acount = await Compte.findOne({ where: { UserName:UserName } });
      
      console.log(acount.UserName);
      if (!acount) {
        return res.status(404).json({ error: 'Utilisateur non trouvé' });
      }
      
      const isMatch = await bcrypt.compare(password, acount.password);
      if (!isMatch) {
        
        return res.status(400).json({ error: 'Mot de passe incorrect' });
      }
      
      if (isMatch){
        const get_RoleUser = await Role.findOne({where:{id:acount.id_role}})//recuperation du role
 
        if(get_RoleUser.designation==='ADMIN'){

          const User =await Administrateur.findOne({where:{id_compte:acount.id}})//RECUPERATION DES INFORMATION ETUDIANT
          const payload = { Compte: {
            id: acount.id, 
            UserName: acount.UserName,
            Role:get_RoleUser.designation,
          }};
          const token = jwt.sign({id: acount.id, 
            UserName: acount.UserName,
            Role:get_RoleUser.designation}, secretKey, { expiresIn: '2h' });
          console.log(`token:${token}`)
          res.json({"token": token });
        }
        if(get_RoleUser.designation==='ETUDIANT'){

          const User =await Etudiant.findOne({where:{id_compte:acount.id}})//RECUPERATION DES INFORMATION ADMIN
          const UserFrais = await Paiement.findOne({where:{id_etudiant:User.id}})
          
          console.log(`Compte: ID:${acount.id} || UserName:${acount.UserName}||Role:${get_RoleUser.designation}`)
          console.log(`Compte: ID:${acount.id} || Nom:${User.Nom}||Post Nom:${User.PostNom} ||UserFrais:${User.frais}`) 
          
          const token = jwt.sign({id: acount.id, 
            UserName: acount.UserName, 
            Role:get_RoleUser.designation,
            Nom:User.Nom,
            PostNom:User.PostNom,
            promotion:User.promotion,
            Frais:UserFrais.frais}, secretKey, { expiresIn: '2h' });
          console.log(`token:${token}`)

          res.json({"token": token });
        }
      
        };
      }
     catch (err) {
      console.error(err);
      res.status(500).send(`Erreur d'authentification:${err}`);
    }
  }

  exports.verifyToken= async(req, res, next)=> {
  //RECUPERER TOKEN
  const token = req.headers['AcessToken'];
  console.log(`verify Token:${token}`)
  if (!token) {
    (err)=>{return res.status(401).json({ err });}
  }

  try {
    // Vérifier et décoder le token

    const decoded = jwt.verify(token, secretKey);
    console.log(`decoded: ID:${decoded.id}|| UserName:${decoded.UserName}||AdresseMail:${decoded.AdresseMail}`)
    const account = await Compte.findByPk(decoded.id);

    if (!account || account.token !== token) {
      return res.status(403).json({ error: 'Jeton d\'authentification invalide' });
    }
    //PERMET D'ENVOYER LES DONNEES A LA ROUTE SUIVATE
    req.user ={id:account.id, AdresseMail:account.AdresseMail}
    console.log(`req.user:${req.user}`)
    next();
  } catch (err) {
    console.error(err);
    (err)=>{return res.status(401).json({ err });}
    res.status(401).json({ error: 'Token non valide' });
  }
}


exports.RessetPassword = async (req, res) => {
  try {
    const { email } = req.body;

    const acount = await Compte.findOne({ where: { email:email } });
    
    console.log(acount);
    if (!acount) {
      return res.status(404).json({ error: 'Utilisateur non trouvé' });
    }
    if(acount){
      //envoi du code de confirmation par mail
    }
  } catch (err) {
    console.error('Erreur lors de la suppression de l\'étudiant :', err);
    res.status(500).send('Erreur Serveur');
  }
};

