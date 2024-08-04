import React from 'react'
import { Link } from 'react-router-dom'
import AdminNavBar from './AdminNavBar'
import Footer from './Footer'
import AdminSideBar from './AdminSideBar'


const corps = () => {
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
  

        {/*Footer*/ }
        <Footer/>
      </div>
    </div>
  )
}

export default corps