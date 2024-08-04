import React from "react"
import Back from "../common/back/Back"
import "./contact.css"

const Contact = () => {
  const map = 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d182819.11368322282!2d15.342729300736313!3d-4.407391257666245!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1a6a3755f368415b%3A0x7d8cec4d8aea7456!2sUniversit%C3%A9%20de%20Kinshasa!5e0!3m2!1sfr!2sde!4v1722587711576!5m2!1sfr!2sde" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade'
  return (
    <>
      <Back title='Contact us' />
      <section className='contacts padding'>
        <div className='container shadow flexSB'>
          <div className='left row'>
            <iframe src={map}></iframe>
          </div>
          <div className='right row'>
            <h1>Contact us</h1>
            <p>Nous sommes ouverts à toutes suggestions de votre part.</p>

            <div className='items grid2'>
              <div className='box'>
                <h4>ADRESSE:</h4>
                <p>J8H9+7M8, Ave De L'Universite, Kinshasa, Congo-Kinshasa</p>
              </div>
              <div className='box'>
                <h4>Code Postale:</h4>
                <p>B.P 127 IX Kinshasa</p>
              </div>
              <div className='box'>
                <h4>WEBSITE:</h4>
                <p><a href="https://www.unikin.ac.cd/">https://www.unikin.ac.cd/</a></p>
              </div>
              <div className='box'>
                <h4>PHONE:</h4>
                <p> +243827260120</p>
              </div>
            </div>

            <form action=''>
              <div className='flexSB'>
                <input type='text' placeholder='Name' />
                <input type='email' placeholder='Email' />
              </div>
              <input type='text' placeholder='Subject' />
              <textarea cols='30' rows='10'>
                Create a message here...
              </textarea>
              <button className='primary-btn'>SEND MESSAGE</button>
            </form>

            <h3>Follow us here</h3>
            <span>FACEBOOK TWITTER INSTAGRAM DRIBBBLE</span>
          </div>
        </div>
      </section>
    </>
  )
}

export default Contact
