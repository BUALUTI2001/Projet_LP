
const { Promotion } = require('../Modeles/Modeles');
//const { Promotion } = require('../Modeles/tables');

exports.Add_Promotion = async (req, res) => {
  try {

    const {promotion}=req.body;
    const AddedPromotion= await Promotion.create({promotion:promotion});
    console.log(`Promotion ajoutée avec succès : ${AddedPromotion}`);

    //res.redirect('/etudiant/students');
  } catch (err) {
    console.error('Erreur lors de l\' ajout de la promotion :', err);
    res.status(500).send('Erreur Serveur');
  }
};

exports.updatePromotion = async (req, res) => {
  try {
    const{id}=req.params;
    console.log(id);
    const {promotion}=req.body;
    const updatedPromotion= await Promotion.update({promotion:promotion}, {where: { id } });
    console.log(`Promotion mis à jour : ${updatedPromotion}`);

    //res.redirect('/etudiant/students');
  } catch (err) {
    console.error('Erreur lors de la mise à jour de la promotion :', err);
    res.status(500).send('Erreur Serveur');
  }
};

exports.deletePromotion = async (req, res) => {
  try {
    const { id } = req.params;
    await Promotion.destroy({ where: { id } });
    //res.redirect('/etudiant//students');
  } catch (err) {
    console.error('Erreur lors de la suppression de la promotion :', err);
    res.status(500).send('Erreur Serveur');
  }
};
