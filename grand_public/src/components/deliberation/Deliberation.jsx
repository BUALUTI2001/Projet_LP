import React from 'react'
import Back from '../common/back/Back'
import DeliberationCritere from './DeliberationCritere'
import Faq from './Faq'

const Deliberation = () => {
  return (
    <div>
      <Back title='Infos Délibération' />
      <section className='price padding'>
        <div className='container grid'>
          <DeliberationCritere />
        </div>
      </section>
      <Faq/>
    </div>
  )
}

export default Deliberation
