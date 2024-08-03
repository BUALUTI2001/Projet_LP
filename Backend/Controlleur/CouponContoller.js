const fs =require("fs");
const path = require("path");
const os = require('os');


const { promisify } = require('util');//pour verifier la validité d'un fichier PDF
const readFile = promisify(fs.readFile);

const { Sequelize } = require("sequelize");
const { Coupon } = require("../Modeles/Modeles");
//const { Coupon } = require("../Modeles/tables");


exports.getAllCoupon = async (req, res) => {
    try {
      const coupons = await Coupon.findAll();
      //const effectif =await Etudiant.count()//POUR COMPTER LES OBJETS
      res.render('coupon', { coupons });
    } catch (err) {
      console.error('Erreur lors de la récupération des étudiants :', err);
      res.status(500).send('Erreur Serveur');
    }
  };


  exports.UpLoad_Coupon = async (req, res) =>{
    try {
      
      // Vérifier si des fichiers ont été téléchargés
      if (!req.files || req.files.length === 0) {
        return res.status(400).send('Aucun fichier téléchargé.');
      }
      
      for (const file of req.files) {
        // Vérifier le format du fichier
        const buffer = await readFile(file.path);
        if (buffer.length < 5 || !buffer.toString().startsWith('%PDF-')) {
          console.error(`Le fichier ${file.originalname} n'est pas un PDF valide.`);
          continue;
        }
          const designationWithoutExtension = path.parse(file.originalname).name;
          const couponFile = await Coupon.create({
            designation: designationWithoutExtension,
            data: buffer//fs.readFileSync(file.path)
          });
          console.log(`Le PDF ${designationWithoutExtension} a été uploadé avec succès!`);  
          //console.log(`Taille du fichier: ${fs.statSync(fs.readFileSync(req.files.path)).size} et celle enregistré: ${couponFile.data.length}`)
        }
      res.redirect('/');
    } catch (err) {
      console.error(err);
      res.status(500).send('Erreur lors de l\'upload du fichier.');
    } 
  };

exports.DOWNLOAD_Coupon = async (req, res) =>{
  try {
    const couponFile = await Coupon.findByPk(req.params.id);
    if (!couponFile) {
      return res.status(404).send('Fichier non trouvé.');
    }
  
    res.set('Content-Type', 'application/pdf');
    res.set('Content-Disposition', `attachment; filename="coupon de ${couponFile.designation}".pdf`);
    
    res.send(couponFile.data);
  } catch (err) {
    console.error(err);
    res.status(500).send('Erreur lors du téléchargement du fichier.');
  }
};
  