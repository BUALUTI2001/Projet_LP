import React from 'react'
import { Link } from 'react-router-dom'

const StudentContentPaiement = () => {
  return (
    <div>
      <div className='page-wrapper'>
        <div className='content container-fluid'>
          <div className='page-header'>
            <div className='row'>
              <div className='col-sm-12'>
                <div className='page-sub-header'>
                  <h3 className='page-title'>Vous pouvez vérifier vos statut des frais académiques</h3>
                  <ul className='breadcrumb'>
                    <li className='breadcrumb-item'>
                      <Link to="/student">Accueil</Link>
                    </li>
                    <li className='breadcrumb-item active'>Paiements</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <div className='row'>
            <div className='col-xl-3 col-sm-6 col-12 d-flex'>
              <div className='card bg-comman w-100'>
                <div className='card-body'>
                  <div className='db-widgets d-flex justify-content-between align-items-center'>
                    <div className='db-info'>
                      <h6>Frais Académiques</h6>
                      <h3>En ordre</h3>
                    </div>
                    <div className='db-icon'>
                      <img
                        src='assets/img/icons/dash-icon-04.svg'
                        alt='Dashboard Icon'
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className='col-xl-3 col-sm-6 col-12 d-flex'>
              <div className='card bg-comman w-100'>
                <div className='card-body'>
                  <div className='db-widgets d-flex justify-content-between align-items-center'>
                    <div className='db-info'>
                      <h6>Frais de Laboratoire</h6>
                      <h3>Pas en ordre</h3>
                    </div>
                    <div className='db-icon'>
                      <img
                        src='assets/img/icons/dash-icon-04.svg'
                        alt='Dashboard Icon'
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className='col-xl-3 col-sm-6 col-12 d-flex'>
              <div className='card bg-comman w-100'>
                <div className='card-body'>
                  <div className='db-widgets d-flex justify-content-between align-items-center'>
                    <div className='db-info'>
                      <h6>Frais Examen Session 1</h6>
                      <h3>En ordre</h3>
                    </div>
                    <div className='db-icon'>
                      <img
                        src='assets/img/icons/dash-icon-04.svg'
                        alt='Dashboard Icon'
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className='col-xl-3 col-sm-6 col-12 d-flex'>
              <div className='card bg-comman w-100'>
                <div className='card-body'>
                  <div className='db-widgets d-flex justify-content-between align-items-center'>
                    <div className='db-info'>
                      <h6>Frais Examen Session 2</h6>
                      <h3>Vous avez fait la première Session</h3>
                    </div>
                    <div className='db-icon'>
                      <img
                        src='assets/img/icons/dash-icon-04.svg'
                        alt='Dashboard Icon'
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default StudentContentPaiement
