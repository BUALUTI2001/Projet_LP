import React from 'react'
import Title from '../common/title/Title'
import { homeAbout } from '../../dummydata'
import AWrapper from './AWrapper'
import './about.css'

const AboutCard = () => {
  return (
    <>
      <section className='aboutHome'>
        <div className='container flexSB'>
          <div className='left row'>
            <img src='./images/photo2.png' alt='' />
          </div>
          <div className='right row'>
            <Title subtitle='Historique' title='Affermis dans le Temps' />
            <div className='items'>
              {homeAbout.map((val) => {
                return (
                  <div className='item flexSB'>
                    <div className='img'>
                      <img src={val.cover} alt='' />
                    </div>  
                    <div className='text'>
                      <h2>{val.title}</h2>
                      <p>{val.desc}</p>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      </section>
      <AWrapper />
    </>
  )
}

export default AboutCard
