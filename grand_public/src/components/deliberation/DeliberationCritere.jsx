import React from 'react'
import { price } from '../../dummydata'
import './deliberation.css'


const DeliberationCritere = () => {
  return (
    <>
        {price.map((val) => (
        <div className='items shadow'>
          <h4>{val.name}</h4>
          <h1>
            <span>%</span>
            {val.price}
          </h1>
          <p>{val.desc}</p>
          <button className='outline-btn'>Voir plus ! </button>
        </div>
      ))}
    </>
  )
}

export default DeliberationCritere