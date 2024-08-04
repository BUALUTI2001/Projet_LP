import React from 'react'
import { Link } from 'react-router-dom'


const AdminContentDB = () => {
  return (
    <div>
        <div className='page-wrapper'>
        <div className='content container-fluid'>
          <div className='page-header'>
            <div className='row'>
              <div className='col-sm-12'>
                <h3 className='page-title'>Gestion de la Base de Données</h3>
                <ul className='breadcrumb'>
                  <li className='breadcrumb-item'>
                    <Link to='/student'>Accueil</Link>
                  </li>
                  <li className='breadcrumb-item active'>Gestion DataBase</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AdminContentDB