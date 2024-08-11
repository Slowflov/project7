import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom'; // Для получения параметров маршрута
import '../styles/main.css';
import { Link } from 'react-router-dom';
import logo from '../assets/image/LOGO.png';
import ArrowLeft from '../assets/image/arrow_left.png';
import ArrowRight from '../assets/image/arrow_right.png';
import Rond from '../assets/image/rond.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import { faStar as faStarRegular } from '@fortawesome/free-regular-svg-icons';

const Logement = () => {
  const { id } = useParams(); // Получаем id из параметров маршрута
  const [logementData, setLogementData] = useState(null);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isDescriptionOpen, setIsDescriptionOpen] = useState(false);
  const [isEquipmentsOpen, setIsEquipmentsOpen] = useState(false);

  useEffect(() => {
    fetch('/data.json')
      .then(response => response.json())
      .then(data => {
        const logement = data.find(item => item.id === id);
        setLogementData(logement);
      })
      .catch(error => console.error('Error fetching data:', error));
  }, [id]);

  if (!logementData) {
    return <div>Loading...</div>;
  }

  const { title, host, rating, location, tags, description, equipments, pictures } = logementData;

  const handleNextSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide + 1) % pictures.length);
  };

  const handlePreviousSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide - 1 + pictures.length) % pictures.length);
  };

  // Определение функций toggleEquipments и toggleDescription
  const toggleEquipments = () => {
    setIsEquipmentsOpen(!isEquipmentsOpen);
  };

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
            <img className="logement_carrousel" src={pictures[currentSlide]} alt={`slide-${currentSlide}`} />
            <img className="arrow arrow-left" src={ArrowLeft} alt="arrow-left" onClick={handlePreviousSlide} />
            <img className="arrow arrow-right" src={ArrowRight} alt="arrow-right" onClick={handleNextSlide} />
          </div>
        </div>
        <section className="logement-menu">
          <div className="logement-items">
            <h2 className="logement-items_title">{title}</h2>
            <div className="logement-prenom-rating">
              <div className="logement-prenom">
                <p className="logement-text">{host.name}</p>
                <img src={Rond} alt="Rond_img_pour_comments" />
              </div>
              <div className="logement-rating">
                {[...Array(5)].map((_, index) => (
                  <FontAwesomeIcon
                    key={index}
                    className='icon-rating'
                    icon={index < rating ? faStar : faStarRegular}
                  />
                ))}
              </div>
              <div className="logement-bar-droite">
                <div className="equipments-header">
                  <p className="logement-bar_text">Équipements</p>
                  <div
                    className={`v-icon-logement ${isEquipmentsOpen ? 'rotate' : ''}`}
                    onClick={toggleEquipments}
                  ></div>
                </div>
                {isEquipmentsOpen && (
                  <div className={`equipments-description-content ${isEquipmentsOpen ? 'open' : ''}`}>
                    <ul className="equipements-list">
                      {equipments.map((item, index) => (
                        <li key={index}>{item}</li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            </div>
          </div>
          <p className='logement-items_text'>{location}</p>
          <div className="logement-other">
            {tags.map((tag, index) => (
              <div key={index}><p className="logement-bg">{tag}</p></div>
            ))}
          </div>
          <div className="logement-bar">
            <p className="logement-bar_text">Description</p>
            <div className="icon-container-logement">
              <div
                className={`v-icon-logement ${isDescriptionOpen ? 'rotate' : ''}`}
                onClick={toggleDescription}
              ></div>
            </div>
          </div>
          {isDescriptionOpen && (
            <div className={`logement-description-content ${isDescriptionOpen ? 'open' : ''}`}>
              <p>{description}</p>
            </div>
          )}
        </section>
      </main>
    </div>
  );
};

export default Logement;





