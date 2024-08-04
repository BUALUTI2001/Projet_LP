import React from 'react';
import './hero.css';
import Title from '../../common/title/Title';
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <>
      <section className='hero'>
        <div className='container'>
          <div className='row'>
            <Title title="Faculté Polytechnique" subtitle="Ingénieur Civil"/>
            <p>
            L'ingénieur civil est un professionnel chargé de la conception, de la construction et de la gestion d'infrastructures et de bâtiments. Il joue un rôle essentiel dans le développement des environnements bâtis.
            Principales responsabilités : Conception, Construction, Gestion de projets, Maintenance et réhabilitaion, Respect de l'environnement.
            
            </p>
            <div className='button'>
              <button className='primary-btn'>
                <a href="/about" className="link">NOTRE FACULTE</a><i className='fa fa-long-arrow-alt-right'></i>
              </button>
              <button className='primary-btn-2'>
                <a href="/about" className="link_2">NOS STATISTIQUES</a><i className='fa fa-long-arrow-alt-right'></i>
              </button>
            </div>
          </div>
        </div>
      </section>
      <div className="margin"></div>
    </>
  )
}

export default Hero
