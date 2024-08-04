import React from 'react'
import Title from '../common/title/Title'
import { online } from "../../dummydata"

const DepartementsClub = () => {
  return (
    <>
      <section className='online'>
        <div className='container'>
          <Title subtitle='Clubs de Génie de la Faculté' title='Clubs des Elèves Ingénieurs' />
          <div className='content grid3'>
            {online.map(val => (
              <div className='box'>
                <div className='img'>
                  <img src={val.cover} />
                  <img src={val.hoverCover} alt='' className='show' />
                </div>
                <h1>{val.courseName}</h1>
                <span>{val.course}</span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}

export default DepartementsClub
