

const { Etudiant } = require('../Modeles/Modeles');
//const { Etudiant } = require('../Modeles/tables');

exports.getAllStudents = async (req, res) => {
  try {
    const students = await Etudiant.findAll();
    const effectif =await Etudiant.count()//POUR COMPTER LES OBJETS
    res.json({students,effectif });
    //res.render('liste', { students });
  } catch (err) {
    console.error('Erreur lors de la récupération des étudiants :', err);
    res.json({"Etudiant": students });
    //res.status(500).send('Erreur Serveur');
  }
};

exports.getCreateStudentForm = async (req, res) => {
  //res.render('etudiant/create');
};

exports.createStudent = async (req, res) => {
  try {
    const {Nom,PostNom,Prenom,Statut,Sexe,InscriptionSpeciale,Promotion}=req.body;//{firstName,lastName,email}--CES VARIABLES SONT ATTACHEES A L'ATTRIBUT NAME DANS LA PAGE HTML
    await Etudiant.create({
        Nom:Nom,
        PostNom:PostNom,
        Prenom:Prenom,
        statut:Statut,
        sexe:Sexe,
        inscriptionSpeciale:InscriptionSpeciale,
        promotion:Promotion
    });
    //res.redirect('/etudiant/students');
  } catch (err) {
    console.error('Erreur lors de la création de l\'étudiant :', err);
    res.status(500).send('Erreur Serveur');
  }
};

exports.getEditStudentForm = async (req, res) => {
  try {
    console.log(req.params.id);
    const student = await Etudiant.findByPk(req.params.id);
    if (!student) {
        res.status(404).send('Etudiant non trouvé');
        return;
      }
    //res.render('etudiant/edit', { student });
  } catch (err) {
    console.error('Erreur lors de la récupération de l\'étudiant pour édition :', err);
    res.status(500).send('Erreur Serveur');
  }
};

exports.updateStudent = async (req, res) => {
  try {
    const{id}=req.params;
    console.log(id);
    const {Nom,PostNom,Prenom,Statut,Sexe,InscriptionSpeciale,Promotion}=req.body;
    const updatedStudent = await Etudiant.update(
        {
            Nom:Nom,
            PostNom:PostNom,
            Prenom:Prenom,
            statut:Statut,
            sexe:Sexe,
            inscriptionSpeciale:InscriptionSpeciale,
            promotion:Promotion

        }, {where: { id } });
    console.log(`Étudiant mis à jour : ${updatedStudent}`);
    res.json(updatedStudent)

    //res.redirect('/etudiant/students');
  } catch (err) {
    console.error('Erreur lors de la mise à jour de l\'étudiant :', err);
    res.json(err)
    //res.status(500).send('Erreur Serveur');
  }
};

exports.deleteStudent = async (req, res) => {
  try {
    const { id } = req.params;
    await Etudiant.destroy({ where: { id } });
    //res.redirect('/etudiant//students');
  } catch (err) {
    console.error('Erreur lors de la suppression de l\'étudiant :', err);
    res.status(500).send('Erreur Serveur');
  }
};
