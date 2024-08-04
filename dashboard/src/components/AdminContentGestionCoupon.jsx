import React from 'react'
import { Link } from 'react-router-dom'


const AdminContentGestionCoupon = () => {
  return (
    <div>
        <div className='page-wrapper'>
        <div className='content container-fluid'>
          <div className='page-header'>
            <div className='row'>
              <div className='col-sm-12'>
                <h3 className='page-title'>Gestion des Coupons</h3>
                <ul className='breadcrumb'>
                  <li className='breadcrumb-item'>
                    <Link to='/student'>Accueil</Link>
                  </li>
                  <li className='breadcrumb-item active'>Gestion Coupons</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AdminContentGestionCoupon