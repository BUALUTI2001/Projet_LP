import React from 'react'
import Hero from './hero/Hero'
import AboutCard from '../about/AboutCard'
import Departements from '../departements/Departements'
import HomeAbout from './HomeAbout'
import Test from '../Testmony/Test'

const Home = () => {
  return (
    <div>
        <Hero/>
        <AboutCard/>
        <HomeAbout/>
        <Test/>
    </div>
  )
}

export default Home