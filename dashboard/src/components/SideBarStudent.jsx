import React from 'react'
import { Link } from 'react-router-dom'

const SideBarStudent = () => {
  return (
    <div>
         <div id='sidebar-menu' className='sidebar-menu'>
              <ul>
                <li className='menu-title'>
                  <span>Menu Principal</span>
                </li>
                <li className='submenu active'>
                  <Link to="/student">
                    <i className='feather-grid'></i>
                    <span>Accueil</span>
                  </Link>
                </li>


                <li className='submenu'>
                  <Link to='/result'>
                    <i className='fas fa-graduation-cap'></i> <span> Résultats</span>{' '}
                  </Link>
                </li>

                <li className='submenu'>
                  <Link to="/paiements">
                    <i className='fas fa-file-invoice-dollar'></i>{' '}
                    <span> Statut paiement</span>
                  </Link>
                </li>

                <li>
                  <Link to="/horaires">
                    <i className='fas fa-clipboard-list'></i>{' '}
                    <span>Horaires</span>
                  </Link>
                </li>


                <li>
                  <Link to='/event'>
                    <i className='fas fa-calendar-day'></i> <span>Events</span>
                  </Link>
                </li>    
              </ul>
            </div>
    </div>
  )
}

export default SideBarStudent