const { Departement } = require("../Modeles/Modeles");


exports.getAllDepartement = async (req, res) => {
    try {
      const students = await Departement.findAll({});
          
    } catch (err) {
      console.error('Erreur lors de la récupération des étudiants :', err);
      res.status(500).send('Erreur Serveur');
    }
  };

  exports.getOneDepartement = async (req, res) => {
    try {
      const departement = await Departement.findOne({where: { id: '1' }});//l'id est à recuperer par une requette http
      console.log(departement)
     
    } catch (err) {
      console.error('Erreur lors de la récupération des étudiants :', err);
      res.status(500).send('Erreur Serveur');
    }
  };

  exports.createDepartement = async (req, res) => {
    try {
      //const {firstName,lastName,email}=req.body;//{firstName,lastName,email}--CES VARIABLES SONT ATTACHEES A L'ATTRIBUT NAME DANS LA PAGE HTML
      await Departement.create();//{firstName,lastName,email}
      
    } catch (err) {
      console.error('Erreur lors de la création du departement :', err);
      res.status(500).send('Erreur Serveur');
    }
  };

  exports.updateStudent = async (req, res) => {
    try {
      const{id}=req.params;
      console.log(id);
      //const {firstName,lastName,email}=req.body;
      const updatedDepartement = await Departement.update();//{firstName, lastName, email}, {where: { id } }
      console.log(`Étudiant mis à jour : ${updatedDepartement}`);
  
      
    } catch (err) {
      console.error('Erreur lors de la mise à jour de l\'étudiant :', err);
      res.status(500).send('Erreur Serveur');
    }
  };
  
  exports.deleteDepartement = async (req, res) => {
    try {
      const { id } = req.params;
      await Departement.destroy({ where: { id } });
      s
    } catch (err) {
      console.error('Erreur lors de la suppression de l\'étudiant :', err);
      res.status(500).send('Erreur Serveur');
    }
  };