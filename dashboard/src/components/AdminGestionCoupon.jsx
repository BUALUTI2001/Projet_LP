import React from 'react'
import AdminNavBar from './AdminNavBar'
import AdminSideBar from './AdminSideBar'
import Footer from './Footer'
import AdminContentGestionCoupon from './AdminContentGestionCoupon'

const AdminGestionCoupon = () => {
  return (
    <div>
      <div className='main-wrapper'>
        {/* Nav_bar */}
        <AdminNavBar />

        <div className='sidebar' id='sidebar'>
          <div className='sidebar-inner slimscroll'>
            {/*Side Bar */}
            <AdminSideBar />
          </div>
        </div>

        {/*Contenu*/}

        <AdminContentGestionCoupon />

        {/*Footer*/}
        <Footer />
      </div>
    </div>
  )
}

export default AdminGestionCoupon
