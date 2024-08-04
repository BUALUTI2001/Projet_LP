import React from 'react'
import AdminContentProfile from './AdminContentProfile'
import AdminSideBar from './AdminSideBar'
import AdminNavBar from './AdminNavBar'
import Footer from './Footer'

const AdminProfile = () => {
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
  
        <AdminContentProfile/>

        {/*Footer*/ }
        <Footer/>
      </div>
    </div>
  )
}

export default AdminProfile