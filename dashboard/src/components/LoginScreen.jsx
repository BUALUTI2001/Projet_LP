import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

const LoginScreen = () => {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const navigate = useNavigate();
  const handleLogin = () => {
    // Gérez la logique de connexion ici (envoi des données au serveur, validation, etc.)
    navigate('/student')
  }

  return (
    <div>
      <div className='main-wrapper login-body'>
        <div className='login-wrapper'>
          <div className='container'>
            <div className='loginbox'>
              <div className='login-left'>
                <img
                  className='img-fluid'
                  src='assets/img/login.png'
                  alt='Logo'
                />
              </div>
              <div className='login-right'>
                <div className='login-right-wrap'>
                  <h1>Welcome to Polytech_Dashboard</h1>
                  {/* <p className="account-subtitle">Need an account? <a href="register.html">Sign Up</a></p> */}
                  <h2>Sign in</h2>

                  <form action=''>
                    <div className='form-group'>
                      <label>
                        Identifiant <span className='login-danger'>*</span>
                      </label>
                      <input
                        className='form-control'
                        type='text'
                        placeholder="Nom d'utilisateur"
                        value={username}
                        onChange={e => setUsername(e.target.value)}
                      />
                      <span className='profile-views'>
                        <i className='fas fa-user-circle'></i>
                      </span>
                    </div>
                    <div className='form-group'>
                      <label>
                        Mot de Passe <span className='login-danger'>*</span>
                      </label>
                      <input
                        className='form-control pass-input'
                        type='password'
                        placeholder='Mot de passe'
                        value={password}
                        onChange={e => setPassword(e.target.value)}
                      />
                      <span className='profile-views feather-eye toggle-password'></span>
                    </div>
                    <div className='forgotpass'>
                      <div className='remember-me'>
                        <label className='custom_check mr-2 mb-0 d-inline-flex remember-me'>
                          {' '}
                          Se souvenir de moi
                          <input type='checkbox' name='radio' />
                          <span className='checkmark'></span>
                        </label>
                      </div>
                      <Link to="/password">Mot de Passe oublié ?</Link>
                    </div>
                    <div className='form-group'>
                      <button
                        className='btn btn-primary btn-block'
                        type='submit' onClick={handleLogin}
                      >
                        Se Connecter
                      </button>
                    </div>
                  </form>

                  <div className='login-or'>
                    <span className='or-line'></span>
                    <span className='span-or'>ou</span>
                  </div>

                  <div className='social-login'>
                    <a href='#'>
                      <i className='fab fa-facebook-f'></i>
                    </a>
                    <a href='#'>
                      <i className='fab fa-twitter'></i>
                    </a>
                    <a href='#'>
                      <i className='fab fa-linkedin-in'></i>
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

export default LoginScreen
