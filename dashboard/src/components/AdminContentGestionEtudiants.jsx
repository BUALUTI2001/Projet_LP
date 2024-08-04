import React from 'react'
import { Link } from 'react-router-dom'
import TableauAdmin from './TableauAdmin'


const AdminContentGestionEtudiants = () => {
  return (
    <div>
        <div className='page-wrapper'>
            <div className='content container-fluid'>
                <div className='page-header'>
                  <div className='row'>
                    <div className='col-sm-12'>
                        <h3 className='page-title'>Gestion des Comptes Etudiant</h3>
                        <ul className='breadcrumb'>
                        <li className='breadcrumb-item'>
                            <Link to='/student'>Accueil</Link>
                        </li>
                        <li className='breadcrumb-item active'>Gestion Compte</li>
                        </ul>
                    </div>
                    <TableauAdmin/>
                  </div>
                </div>
            </div>
      </div>
    </div>
  )
}

export default AdminContentGestionEtudiants