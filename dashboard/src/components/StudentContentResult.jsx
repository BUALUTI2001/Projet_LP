import React from 'react'
import { Link } from 'react-router-dom'

const StudentContentResult = () => {
  return (
    <div>
      <div className='page-wrapper'>
        <div className='content container-fluid'>
          <div className='page-header'>
            <div className='row align-items-center'>
              <div className='col'>
                <h3 className='page-title'>Vos Résultats</h3>
                <ul className='breadcrumb'>
                  <li className='breadcrumb-item'>
                    <Link to='/student'>Accueil</Link>
                  </li>
                  <li className='breadcrumb-item active'>Résultats</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className='student-group-form'>
          <div className='row'>
            <div className='col-lg-6 col-md-6'>
              <div className='form-group'>
                <h3 style={{ display: 'flex', marginLeft: '30px' }}>Statistiques</h3>
              </div>
            </div>
            <div className='col-lg-3 col-md-6'>
                <div className="col-auto text-end float-end ms-auto download-grp">
                    <a href='#' className='btn btn-outline-primary me-2'>
                        <i className='fas fa-download'></i> Download
                    </a>
                </div>
            </div>
          </div>
        </div>
        <div className="row" style={{padding: '20px'}}>
                    <div className="col-xl-3 col-sm-6 col-12 d-flex">
                        <div className="card bg-comman w-100">
                            <div className="card-body">
                                <div className="db-widgets d-flex justify-content-between align-items-center">
                                    <div className="db-info">
                                        <h6>Nombre de Réussites</h6>
                                        <h3>13</h3>
                                    </div>
                                    <div className="db-icon">
                                        <img src="assets/img/icons/dash-icon-01.svg" alt="Dashboard Icon"/>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-3 col-sm-6 col-12 d-flex">
                        <div className="card bg-comman w-100">
                            <div className="card-body">
                                <div className="db-widgets d-flex justify-content-between align-items-center">
                                    <div className="db-info">
                                        <h6>Nombre Distinction</h6>
                                        <h3>3</h3>
                                    </div>
                                    <div className="db-icon">
                                        <img src="assets/img/icons/dash-icon-02.svg" alt="Dashboard Icon"/>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-3 col-sm-6 col-12 d-flex">
                        <div className="card bg-comman w-100">
                            <div className="card-body">
                                <div className="db-widgets d-flex justify-content-between align-items-center">
                                    <div className="db-info">
                                        <h6>Année Académique</h6>
                                        <h3>2023-2024</h3>
                                    </div>
                                    <div className="db-icon">
                                        <img src="assets/img/icons/search-book_13972584.png" alt="Dashboard Icon"/>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-3 col-sm-6 col-12 d-flex">
                        <div className="card bg-comman w-100">
                            <div className="card-body">
                                <div className="db-widgets d-flex justify-content-between align-items-center">
                                    <div className="db-info">
                                        <h6>Décision Jury</h6>
                                        <h3>decision_jury</h3>
                                    </div>
                                    <div className="db-icon">
                                        <img src="assets/img/icons/stamp_5442020.png" alt="Dashboard Icon"/>
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

export default StudentContentResult
