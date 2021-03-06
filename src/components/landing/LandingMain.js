import React from 'react';
import { Link } from 'react-router-dom';
import LogoTitle from '../../images/logo-completom.png';
import Carousel from './Carousel.js';

class LandingMain extends React.Component {
  render() {
    return (
      <main className='page__main'>
        <div className='main'>
          <h1 className='main__title'>
            <img
              className='main__title-img'
              src={LogoTitle}
              alt='Logo de awesome profile cards'
            />
          </h1>
          <div className='main__text'>
            <h2 className='main__text-h2'>Crea tu tarjeta de visita</h2>
            <p className='main__text-p'>
              Crea mejores contactos profesionales de forma fácil y cómoda
            </p>
          </div>
          <nav>
            <ul className='main__menu'>
              <li className='main__menu-list item-1'>
                <i className='main__menu-icons far fa-object-ungroup'></i>
                <p className='main__menu-text'>Diseña</p>
              </li>
              <li className='main__menu-list item-2'>
                <i className='main__menu-icons far fa-keyboard'></i>
                {/* TODO fix icon */}
                <p className='main__menu-text'>Rellena</p>
              </li>
              <li className='main__menu-list item-3'>
                <i className='main__menu-icons fas fa-share-alt'></i>
                <p className='main__menu-text'>Comparte</p>
              </li>
            </ul>
          </nav>
          <Link to="/form" className='main__button' title='Comenzar a hacer tu tarjeta'>Comenzar</Link>
          <Carousel />
        </div>
      </main>
    );
  }
}

export default LandingMain;
