import React from 'react'
import { Link } from 'react-router-dom'
import NavBarStudent from './NavBarStudent'
import Footer from './Footer'
import SideBarStudent from './SideBarStudent'
import StudentContentHome from './StudentContentHome'
import StudentContentResult from './StudentContentResult'

const StudentResults = () => {
  return (
    <div>
      <div className='main-wrapper'>
        {/* Nav_bar */}
        <NavBarStudent/>
        
        <div className='sidebar' id='sidebar'>
          <div className='sidebar-inner slimscroll'>
            {/*Side Bar */}
            <SideBarStudent/>
          </div>
        </div>

        {/*Contenu*/}
        <StudentContentResult/>
        {/*Footer*/ }
        <Footer/>
      </div>
    </div>
  )
}

export default StudentResults
