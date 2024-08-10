import React, { useState } from 'react';
import '../styles/main.css';
import { Link } from 'react-router-dom'
import logo from '../assets/image/LOGO.png';
import BackgroundCarrousel from '../assets/image/Background_carrousel.jpg';
import ArrowLeft from '../assets/image/arrow_left.png';
import ArrowRight from '../assets/image/arrow_right.png';
import Rond from '../assets/image/rond.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import { faStar as faStarRegular } from '@fortawesome/free-regular-svg-icons';



const Logement = () => {
  const [isDescriptionOpen, setIsDescriptionOpen] = useState(false);
  const toggleDescription = () => {
    setIsDescriptionOpen(!isDescriptionOpen);
  };
  return (
    <div className="container-logement">
      <header className="header-logement">
      <div className="header_inner">
        <img className="header_img" src={logo} alt="LOGO" />
        <ul className="header_list">
          <li className="header_item">
            <Link className="header_link" to="/">Accueil</Link>
          </li>
          <li className="header_item">
            <Link className="header_link" to="/Propos">A Propos</Link>
          </li>
        </ul>
      </div>
      </header>
      <main id="logement">
        <div className="carrousel-wrapper">
          <div className="carrousel-container">
            <img className="logement_carrousel" src={BackgroundCarrousel} alt="slide-img-" />
            <img className="arrow arrow-left" src={ArrowLeft} alt="arrow-left" />
            <img className="arrow arrow-right" src={ArrowRight} alt="arrow-right" />
          </div>
        </div>
        <section className="logement-menu">
  <div className="logement-items">
    <h2 className="logement-items_title">Cozy loft on the Canal Saint-Martin</h2>
    <div className="logement-prenom-rating">
      <div className="logement-prenom">
        <p className="logement-text">Alexandre Dumas</p>
        <img src={Rond} alt="Rond_img_pour_comments" />
      </div>
      <div className="logement-rating">
        <FontAwesomeIcon className='icon-rating' icon={faStar} />
        <FontAwesomeIcon className='icon-rating' icon={faStar} />
        <FontAwesomeIcon className='icon-rating' icon={faStar} />
        <FontAwesomeIcon icon={faStarRegular} className="neutral-star" />
        <FontAwesomeIcon icon={faStarRegular} className="neutral-star" />
      </div>
      <div className="logement-bar-droite">
    <p className="logement-bar_text">Équipements</p>
    <div className="icon-container-logement">
      <div className="v-icon-logement"></div>
    </div>
  </div>
    </div>
  </div>
  <p className='logement-items_text'>Paris, Île-de-France</p>
  <div className="logement-other">
    <div><p className="logement-bg">Cozy</p></div>
    <div><p className="logement-bg">Canal</p></div>
    <div><p className="logement-bg">Paris 10</p></div>
  </div>
  <div className="logement-bar" onClick={toggleDescription}>
            <p className="logement-bar_text">Description</p>
            <div className="icon-container-logement">
              <div className="v-icon-logement"></div>
            </div>
          </div>
          {isDescriptionOpen && (
             <div className={`logement-description-content ${isDescriptionOpen ? 'open' : ''}`}>
              <p>
                Vous serez à 50m du canal Saint-martin où vous pourrez pique-niquer l'été et à côté de nombreux bars et restaurants.
                Au cœur de Paris avec 5 lignes de métro et de nombreux bus. Logement parfait pour les voyageurs en solo et les voyageurs d'affaires.
                Vous êtes à la station de la gare de l'Est (7 minutes à pied).
              </p>
            </div>
          )}
</section>
      </main>
    </div>
  );
};

export default Logement;

