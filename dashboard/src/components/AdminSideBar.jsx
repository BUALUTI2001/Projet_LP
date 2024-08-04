import React from 'react'
import { Link } from 'react-router-dom'

const AdminSideBar = () => {
  return (
    <div>
        <div className='sidebar' id='sidebar'>
          <div className='sidebar-inner slimscroll'>
            <div id='sidebar-menu' className='sidebar-menu'>
              <ul>
                <li className='menu-title'>
                  <span>Menu Principal</span>
                </li>
                <li className='submenu active'>
                  <Link to="/admin">
                    <i className='feather-grid'></i>
                    <span>Accueil</span>
                  </Link>
                </li>

            
                <li className='submenu'>
                  <Link to="/gestionStudent">
                  <i className="fas fa-address-card"></i>{' '}
                    <span> Gestion Etudiants</span>
                  </Link>
                </li>

                <li className='submenu'>
                  <Link to="/gestionComptes">
                    <i className='fas fa-chalkboard-teacher'></i>{' '}
                    <span> Gestion Comptes</span>
                  </Link>
                </li>


                <li className='submenu'>
                  <Link to="/gestionFrais">
                    <i className='fas fa-file-invoice-dollar'></i>{' '}
                    <span> Gestion Frais</span>
                  </Link>
                </li>


                <li>
                  <Link to="/gestionCoupon">
                    <i className='fas fa-calendar-day'></i> <span>Gestion Coupon</span>
                  </Link>
                </li>


                <li>
                  <Link to="/fillDB">
                    <i className='fas fa-table'></i> <span>Fill Database</span>
                  </Link>
                </li>

                <li>
                  <Link to='/email'>
                    <i className='fas fa-book'></i> <span>Gestion Emails</span>
                  </Link>
                </li>

                
              </ul>
            </div>
          </div>
        </div>
    </div>
  )
}

export default AdminSideBar