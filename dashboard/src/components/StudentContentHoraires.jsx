import React from 'react'
import { Link } from 'react-router-dom'


const StudentContentHoraires = () => {
  return (
    <div>
      <div className='page-wrapper'>
        <div className='content container-fluid'>
          <div className='page-header'>
            <div className='row align-items-center'>
              <div className='col'>
                <h3 className='page-title'>Horaires</h3>
                <ul className='breadcrumb'>
                  <li className='breadcrumb-item'>
                    <Link to='/student'>Accueil</Link>
                  </li>
                  <li className='breadcrumb-item active'>Horaires</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default StudentContentHoraires
