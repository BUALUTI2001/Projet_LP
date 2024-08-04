import React from 'react'
import AdminSideBar from './AdminSideBar'
import AdminNavBar from './AdminNavBar'
import Footer from './Footer'
import AdminContentGestionComptes from './AdminContentGestionComptes'

const AdminGestionComptes = () => {
  return (
    <div>
        <div className='main-wrapper'>
        {/* Nav_bar */}
        <AdminNavBar/>
        
        <div className='sidebar' id='sidebar'>
          <div className='sidebar-inner slimscroll'>
            {/*Side Bar */}
            <AdminSideBar/>
          </div>
        </div>

        {/*Contenu*/}
        <AdminContentGestionComptes/>

        {/*Footer*/ }
        <Footer/>
      </div>
    </div>
  )
}

export default AdminGestionComptes