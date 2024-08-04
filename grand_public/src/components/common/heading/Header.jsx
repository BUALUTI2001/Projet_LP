import { useState } from 'react'
import React from 'react'
import Head from './Head'
import './header.css'
import { Link } from 'react-router-dom'

const Header = () => {
  const [click, setClick] = useState(false)
  return (
    <>
      <Head />
      <header>
        <nav className='flexSB'>
          <ul
            className={click ? 'mobile-nav' : 'flexSB '}
            onClick={() => setClick(false)}
          >
            <li>
              <Link to='/'>Accueil</Link>
            </li>

            <li>
              <Link to='/departements'>Départements</Link>
            </li>

            <li>
              <Link to='/deliberation'>Délibération</Link>
            </li>

            <li>
              <Link to='/teams'>Corps Professoral</Link>
            </li>

            <li>
              <Link to='/about'>About Us</Link>
            </li>

            <li>
              <Link to='/contact'>Contact</Link>
            </li>

            <li>
              <a href='http://localhost:3000/' className="login">Se Connecter</a>
            </li>
          </ul>
          <div className='start'>
            <div className='button'>MENU</div>
          </div>
          <button className='toggle' onClick={() => setClick(!click)}>
            {click ? (
              <i className='fa fa-times'> </i>
            ) : (
              <i className='fa fa-bars'></i>
            )}
          </button>
        </nav>
      </header>
    </>
  )
}

export default Header
