const fs =require('fs');
const path = require('path');
 const xlsx =require('xlsx');
 const { Op } = require('sequelize');

const { Cours, Promotion } = require('../Modeles/Modeles');
//const { Cours, Promotion } = require('../Modeles/tables');


 exports.UP_LOAD_Cours = async (req, res) =>{
    try {
        const uploadsDir = path.join(__dirname, '/uploads/');
        const excelFilePath =path.join(`uploads/${req.file.filename}`);
        
         //lecture du fichier excel
        const workbook =xlsx.readFile(excelFilePath);
        const sheetCount = workbook.SheetNames.length;
        console.log(`sheetCount: ${sheetCount}`)

        if(sheetCount<1){
            const sheetName =workbook.SheetNames[index];//le nom de la feuille à l'interieur du fichier excell
            console.log(`sheetName: ${sheetName}`)
            const workSheet =workbook.Sheets[0];
            
            const data =xlsx.utils.sheet_to_json(workSheet);

            for( const row of data){
                const Promo =await Promotion.findOne({ where: {promotion: {[Op.like]: `%${sheetName}%`}}})
                const [cours, created] = await Cours.findOrCreate({
                    where: {
                        designation: row.Cours,
                        theorie: row.Theorie,
                        pratique: row.Pratique,
                    },
                    defaults: {
                        id_Promotion:Promo.id
                    }
                  });
            }
        }
        
        for (const index = 0; index < sheetCount; index++) {
            const sheetName =workbook.SheetNames[index];//le nom de la feuille à l'interieur du fichier excell
            console.log(`sheetName: ${sheetName}`)
            const workSheet =workbook.Sheets[sheetName];
            
            const data =xlsx.utils.sheet_to_json(workSheet);
            
            for( const row of data){
                console.log(`UN COURS: ${row.Cours}`)
                try {
                    const Promo =await Promotion.findOne({ where: {promotion: {[Op.like]: `%${sheetName}%`}}})
                                       
                    if(!Promo){
                        console.log(`La promotion ${sheetName} n'existe pas dans notre database ou est mal orthographiée `)
                    }
                    if(Promo){
                        console.log(`Cours: ${row.Cours}||Theorie:${row.Theorie} ||Pratique:${row.Theorie} ||Promotion:${Promo.promotion}`)
                        const [cours, created] = await Cours.findOrCreate({
                            // Cours ||Theorie	Pratique	Ponderation	Promotion (Dans le fichier excell)
                            where: {
                                designation: row.Cours,
                                theorie: row.Theorie,
                                pratique: row.Pratique,
                            },
                            defaults: {
                                id_Promotion:Promo.id
                            }
                          });
                          if(created){
                            console.log(`cours cree: ${created}`)
                          }
                          if(cours){
                            console.log(`le cours: ${cours} existe dans la DATABASE`)
                          }
                    }      
                } catch (error) {
                    console.log(`erreur lors de l'insertion dans la database|| ${error}`)
                }
            }
            
        }
        
    } catch (error) {
        console.log(`erreur lors de l'upload des cours|| ${error}`)
      }
 }


