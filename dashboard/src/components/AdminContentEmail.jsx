import React from 'react'
import { Link } from 'react-router-dom'

const AdminContentEmail = () => {
  return (
    <div>
      <div className='page-wrapper'>
        <div className='content container-fluid'>
          <div className='page-header'>
            <div className='row'>
              <div className='col-sm-12'>
                <h3 className='page-title'>Gestion des Email avec Etudiants</h3>
                <ul className='breadcrumb'>
                  <li className='breadcrumb-item'>
                    <Link to='/student'>Accueil</Link>
                  </li>
                  <li className='breadcrumb-item active'>Gestion Email</li>
                </ul>
              </div>
              <div className='card'>
                <div className='card-body'>
                  <div className='bank-inner-details'>
                    <div className='row'>
                      <div className='col-lg-12 col-md-12'>
                        <div className='form-group'>
                          <label>
                            Object du Mail<span className='text-danger'>*</span>
                          </label>
                          <input
                            type='text'
                            className='form-control'
                            placeholder='Entrez votre object de mail'
                            required
                          />
                        </div>
                      </div>
                      <div className='col-lg-12 col-md-12'>
                        <div className='form-group'>
                          <label>
                            Corps du Message<span class='text-danger'>*</span>
                          </label>
                          <div id='editor'>
                            <input
                              type='text'
                              class='form-control'
                              id="message"
                              placeholder='Entrez Votre message'
                              required
                            />
                          </div>
                        </div>
                        <div className='form-group'>
                          <label>
                            Mot de Passe Admin<span className='text-danger'>*</span>
                          </label>
                          <div id='editor'>
                            <input
                              type='password'
                              className='form-control'
                              id='password_admin'
                              placeholder='Entrez Votre mot de passe'
                              required
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className=' blog-categories-btn pt-0'>
                  <div className='bank-details-btn '>
                    <a href='blog.html' className='btn bank-cancel-btn me-2'>
                      Envoyer
                    </a>
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

export default AdminContentEmail
