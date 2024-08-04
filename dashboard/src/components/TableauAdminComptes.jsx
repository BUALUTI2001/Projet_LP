import React, { useState, useEffect } from 'react';
import axios from 'axios';


const TableauAdminComptes = () => {
  const [etudiants, setEtudiants] = useState([]);
  const [effectif, setEffectif] = useState(0);
  const [promotions, setPromotions] = useState([]);
  const [selectedPromotion, setSelectedPromotion] = useState('');
  const [selectedPromotionEffectif, setSelectedPromotionEffectif] = useState(0);
  
  // Formulaire pour ajouter/modifier un étudiant
  const [showForm, setShowForm] = useState(false);
  const [formType, setFormType] = useState('add'); // 'add' ou 'edit'
  const [currentStudent, setCurrentStudent] = useState({});
  const [formData, setFormData] = useState({
    UserName: '',
    AdresseMail: '',
    password: '',
    telephone: '',
  });

  // Fonction pour récupérer les données
  const fetchData = async () => {
    try {
      const response = await axios.get('/admin/students/');
      setEtudiants(response.data.students);
      setEffectif(response.data.effectif);

      // Récupérer la liste des promotions
      const promotions = [...new Set(response.data.students.map((etudiant) => etudiant.promotion))];
      setPromotions(promotions);
    } catch (error) {
      console.error('Erreur lors de la récupération des étudiants :', error);
    }
  };

  // Chargement initial des données
  useEffect(() => {
    fetchData();
  }, []);

  // Fonction pour actualiser les données
  const handleRefresh = () => {
    fetchData();
  };

  const handlePromotionChange = (e) => {
    const selectedPromotion = e.target.value;
    setSelectedPromotion(selectedPromotion);
    const filteredEtudiants = etudiants.filter((etudiant) => etudiant.promotion === selectedPromotion);
    setSelectedPromotionEffectif(filteredEtudiants.length);
  };

  const filteredEtudiants = selectedPromotion
    ? etudiants.filter((etudiant) => etudiant.promotion === selectedPromotion)
    : etudiants;

  const handleFormChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleAddStudent = async () => {
    try {
      await axios.post('/admin/students/add', formData);
      setShowForm(false);
      setFormData({
        Nom: '',
        PostNom: '',
        Prenom: '',
        Statut: '',
        Sexe: '',
        InscriptionSpecial: '',
        promotion: '',
      });
      fetchData(); // Recharger les données après ajout
    } catch (error) {
      console.error('Erreur lors de l\'ajout de l\'étudiant :', error);
    }
  };

  const handleEditStudent = async () => {
    try {
      await axios.put(`/admin/students/${currentStudent.id}`, formData);
      setShowForm(false);
      setFormData({
        id:'',
        UserName: '',
        AdresseMail: '',
        password: '',
        telephone: '',
      });
      fetchData(); // Recharger les données après modification
    } catch (error) {
      console.error('Erreur lors de la modification de l\'étudiant :', error);
    }
  };

  const handleDeleteStudent = async (id) => {
    try {
      await axios.delete(`/admin/students/${id}`);
      fetchData(); // Recharger les données après suppression
    } catch (error) {
      console.error('Erreur lors de la suppression de l\'étudiant :', error);
    }
  };

  const handleBlockStudent = async (id) => {
    try {
      await axios.patch(`/admin/students/${id}/block`);
      fetchData(); // Recharger les données après blocage
    } catch (error) {
      console.error('Erreur lors du blocage de l\'étudiant :', error);
    }
  };

  return (
    <div className="container my-5">
      <h1 className="mb-4">Comptes Etudiants</h1>

      <div className="mb-4">
        <button className="btn btn-danger me-2" onClick={() => { setFormType('add'); setShowForm(true); }}>Supprimer un compte</button>
        <button className="btn btn-info ms-2" onClick={handleRefresh}>Actualiser</button>
      </div>

      <div className="row align-items-center mb-4">
        <div className="col-auto">
          <label htmlFor="promotion-filter" className="form-label btn btn-secondary">Filtrer par promotion :</label>
        </div>
        <div className="col-auto">
          <select
            id="promotion-filter"
            className="form-select"
            value={selectedPromotion}
            onChange={handlePromotionChange}
          >
            <option value="">Toutes les promotions</option>
            {promotions.map((promotion) => (
              <option key={promotion} value={promotion}>
                {promotion}
              </option>
            ))}
          </select>
        </div>
        <div className="col-auto">
          {selectedPromotion && (
            <span className="btn btn-primary">Effectif Promotion: {selectedPromotionEffectif}</span>
          )}
        </div>
      </div>

      <table className="table table-striped table-hover">
        <thead>
          <tr>
            <th>ID</th>
            <th>UserName</th>
            <th>Adresse Mail</th>
            <th>Password</th>
            <th>Téléphone</th>
          </tr>
        </thead>
        <tbody>
          {filteredEtudiants.map((etudiant) => (
            <tr key={etudiant.id}>
              <td>{etudiant.id}</td>
              <td>{etudiant.UserName}</td>
              <td>{etudiant.AdresseMail}</td>
              <td>{etudiant.password}</td>
              <td>{etudiant.telephone}</td>
              <td>
                <button className="btn btn-warning me-2" onClick={() => { setFormType('edit'); setCurrentStudent(etudiant); setFormData(etudiant); setShowForm(true); }}>Modifier</button>
                <button className="btn btn-danger me-2" onClick={() => handleDeleteStudent(etudiant.id)}>Supprimer</button>
                <button className="btn btn-secondary" onClick={() => handleBlockStudent(etudiant.id)}>{etudiant.Statut === 'bloqué' ? 'Débloquer' : 'Bloquer'}</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {showForm && (
        <div className="card p-4 shadow mt-4">
          <h2 className="card-title mb-4">{formType === 'add' ? 'Supprimer un compte' : 'Supprimer un compte'}</h2>
          <div className="form-group mb-3">
            <label htmlFor="Nom">User Name:</label>
            <input
              type="text"
              className="form-control"
              id="UserName"
              name="UserName"
              value={formData.Nom}
              onChange={handleFormChange}
            />
          </div>
          <div className="form-group mb-3">
            <label htmlFor="PostNom">Adresse Mail:</label>
            <input
              type="text"
              className="form-control"
              id="AdresseMail"
              name="AdresseMail"
              value={formData.PostNom}
              onChange={handleFormChange}
            />
          </div>

          <button className="btn btn-primary ms-2" onClick={formType === 'delete' ? handleAddStudent : handleEditStudent}>
            {formType === 'delete' ? 'Supprimer' : 'Supprimer'}
          </button>
          <button className="btn btn-secondary ms-2" onClick={() => setShowForm(false)}>Annuler</button>
        </div>
      )}
    </div>
  );
};

export default TableauAdminComptes;
