import React from 'react'
import { Link } from 'react-router-dom'
import TableauAdminComptes from './TableauAdminComptes'
const AdminContentGestionComptes = () => {
  return (
    <div>
      <div className='page-wrapper'>
        <div className='content container-fluid'>
          <div className='page-header'>
            <div className='row'>
              <div className='col-sm-12'>
                <h3 className='page-title'>Gestion des Comptes des Etudiants</h3>
                <ul className='breadcrumb'>
                  <li className='breadcrumb-item'>
                    <Link to='/student'>Accueil</Link>
                  </li>
                  <li className='breadcrumb-item active'>Gestion Comptes</li>
                </ul>
              </div>
              <TableauAdminComptes/>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AdminContentGestionComptes
