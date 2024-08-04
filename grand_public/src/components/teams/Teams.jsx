import React from 'react'
import Back from '../common/back/Back'
import TeamsCards from './TeamsCards'
import AWrapper from '../about/AWrapper'

const Teams = () => {
  return (
    <>
        <Back title="Corps Professoral"/>
        <section className='team padding'>
        <div className='container grid'>
          <TeamsCards />
        </div>
      </section>
      <AWrapper />
    </>
  )
}

export default Teams