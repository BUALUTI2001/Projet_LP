import React from 'react'
import AdminNavBar from './AdminNavBar'
import AdminSideBar from './AdminSideBar'
import Footer from './Footer'
import AdminContentGestionEtudiants from './AdminContentGestionEtudiants'

const AdminGestionEtudiants = () => {
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
  
        <AdminContentGestionEtudiants/>

        {/*Footer*/ }
        <Footer/>
      </div>
    </div>
  )
}

export default AdminGestionEtudiants