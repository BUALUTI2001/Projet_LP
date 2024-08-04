import React from 'react'
import Back from '../common/back/Back'
import Departements from './Departements'
import DepartementsClub from './DepartementsClub'

const DepartementsHome = () => {
  return (
    <>
        <Back title="Nous formons des :"/>
        <Departements/>
        <DepartementsClub/>
    </>
  )
}

export default DepartementsHome