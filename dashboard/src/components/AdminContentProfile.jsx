import React from 'react'
import { Link } from 'react-router-dom'



const AdminContentProfile = () => {
  return (
    <div>
      <div className='page-wrapper'>
        <div className='content container-fluid'>
          <div className='page-header'>
            <div className='row'>
              <div className='col-sm-12'>
                <h3 className='page-title'>Mon Profil Costumer</h3>
                <ul className='breadcrumb'>
                  <li className='breadcrumb-item'>
                    <Link to='/student'>Accueil</Link>
                  </li>
                  <li className='breadcrumb-item active'>Mon Profil</li>
                </ul>
              </div>
            </div>
          </div>

          <div className='row'>
            <div className='col-sm-12'>
              <div className='card'>
                <div className='card-header'>
                  <h5 className='card-title'>Edition de son Compte Administateur</h5>
                  <p className='card-text'>Modifier votre Compte Etudiant</p>
                </div>
                <div className='card-body'>
                  <div className='row'>
                    <div className='col-sm'>
                      <form className='needs-validation' novalidate>
                        <div className='row'>
                          <div className='col-md-4 mb-3'>
                            <label for='validationCustomUsername'>
                              Username
                            </label>
                            <div className='input-group'>
                              <span
                                className='input-group-text'
                                id='inputGroupPrepend'
                              >
                                @
                              </span>
                              <input
                                type='text'
                                className='form-control'
                                id='username'
                                placeholder='Username'
                                aria-describedby='inputGroupPrepend'
                                required
                              />
                              <div className='invalid-feedback'>
                                Please choose a password.
                              </div>
                            </div>
                          </div>
                          <div className='col-md-4 mb-3'>
                            <label for='validationCustom01'>Email</label>
                            <input
                              type='email'
                              className='form-control'
                              id='email'
                              placeholder='Entrez votre Email'
                              required
                            />
                            <div className='valid-feedback'>Looks good!</div>
                          </div>
                          <div className='col-md-4 mb-3'>
                            <label for='validationCustom02'>Password</label>
                            <input
                              type='password'
                              className='form-control'
                              id='password_user'
                              placeholder='Entrez votre mot de passe'
                              required
                            />
                            <div className='valid-feedback'>Looks good!</div>
                          </div>
                        </div>
                        <div className='row'>
                          <div className='col-md-6 mb-3'>
                            <label for='validationCustom03'>Téléphone</label>
                            <input
                              type='text'
                              className='form-control'
                              id='telephone'
                              placeholder='Entrez votre numéro de téléphone'
                              required
                            />
                          </div>
                          <div className='col-md-6 mb-3'>
                            <label for='validationCustom03'>
                              Upload photo de Profil
                            </label>
                            <form
                              action='/admin/uploadStudent'
                              method='post'
                              encType='multipart/form-data'
                            >
                              <input
                                type='file'
                                name='userProfile'
                                className='form-control'
                              />
                            </form>
                          </div>
                        </div>
                        <div className='form-group'>
                          <div className='form-check'>
                            <div className='invalid-feedback'>
                              You must agree before submitting.
                            </div>
                          </div>
                        </div>
                        <button className='btn btn-primary' type='submit'>
                          Submit form
                        </button>
                      </form>
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


export default AdminContentProfile