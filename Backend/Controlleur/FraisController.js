const fs =require('fs');
const path = require('path');
 const xlsx =require('xlsx');
 const { where, Op } = require('sequelize');

const { Paiement, Etudiant } = require('../Modeles/Modeles');
//const { Paiement, Etudiant } = require('../Modeles/tables');


 exports.ValiderPaiement_EXCEL= async (req, res) =>{
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

  for(const row of data){
    try {
      console.log(`Nom:${row.Nom}|| PostNom:${row.PostNom} ||Promotion:${row.Promotion}`)
      const etudiant =await Etudiant.findOne({where:{
        [Op.and]: [
          {Nom: row.Nom},
          {PostNom: row.PostNom},
          {promotion: row.Promotion}
           ]
      }})
      if(!etudiant){
        console.log(`L'Etudiant ${row.Nom} ${row.PostNom} ${row.Promotion} n'existe pas dans la database`)
      }
      if(etudiant){
        try {
          const check_Frais =row.Frais
          if(check_Frais==='OUI'){
            const paiement=await Paiement.update({frais:true},{where:{id_etudiant:etudiant.id}})
          }
        } catch (error) {
          console.log(error)
        }
      }
    } catch (error) {
      console.log(error)
    }
  }
 }

 exports.Valider_Paiement = async (req, res) => {
    try {
      const {id} =req.params;
      const chekPaiement = await Paiement.findOne({ where: { id_etudiant: id } });
      //const frais_Etudiant =await findOne({where:{id:id}})
      if (!chekPaiement) {
        console.log('Etudiant non trouvé');
      } else {
        // Inverser l'état du paiement (frais)
        await Paiement.update(
          { frais: !chekPaiement.frais },//une fonction toogle
          { where: { id: chekPaiement.id } }
        );
        console.log(
          `Le statut du paiement a été mis à ${chekPaiement.frais ? 'en ordre' : 'hors ordre'}`
        );
      }
      //res.json(frais_Etudiant.frais)
      res.redirect('/');
    } catch (error) {
      console.log(error);
    }
  };