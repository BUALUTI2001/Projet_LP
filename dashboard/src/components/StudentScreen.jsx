import React from 'react'
import { Link } from 'react-router-dom'
import NavBarStudent from './NavBarStudent'
import StudentContentHome from './StudentContentHome'
import Footer from './Footer'
import SideBarStudent from './SideBarStudent'

const StudentScreen = () => {
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

        {/*Contenu Accueil*/}
        <StudentContentHome/>

        {/*Footer*/ }
        <Footer/>
      </div>
    </div>
  )
}

export default StudentScreen
