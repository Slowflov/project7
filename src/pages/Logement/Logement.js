import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom'; // Importer useNavigate pour la navigation
import '../../styles/main.css';
import { Link } from 'react-router-dom';
import logo from '../../assets/image/LOGO.png';
import ArrowLeft from '../../assets/image/arrow_left.png';
import ArrowRight from '../../assets/image/arrow_right.png';
import Rond from '../../assets/image/rond.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import { faStar as faStarRegular } from '@fortawesome/free-regular-svg-icons';

const Logement = () => {
  const { id } = useParams(); // Récupérer l'ID du logement depuis les paramètres d'URL
  const navigate = useNavigate(); // Fonction pour naviguer entre les pages
  const [logementData, setLogementData] = useState(null); // État pour stocker les données du logement
  const [currentSlide, setCurrentSlide] = useState(0); // État pour suivre la diapositive actuelle
  const [isDescriptionOpen, setIsDescriptionOpen] = useState(false); // État pour gérer l'ouverture de la description
  const [isEquipmentsOpen, setIsEquipmentsOpen] = useState(false); // État pour gérer l'ouverture des équipements

  useEffect(() => {
    // Effet pour récupérer les données du logement lorsque le composant est monté
    fetch('/data.json')
      .then(response => response.json())
      .then(data => {
        const logement = data.find(item => item.id === id); // Trouver le logement correspondant à l'ID
        if (logement) {
          setLogementData(logement); // Mettre à jour l'état avec les données du logement
        } else {
          navigate('/404', { replace: true }); // Rediriger vers la page 404 si le logement n'est pas trouvé
        }
      })
      .catch(error => {
        console.error('Error fetching data:', error); // Loguer les erreurs de récupération de données
        navigate('/404', { replace: true }); // Rediriger vers la page 404 en cas d'erreur
      });
  }, [id, navigate]); // Dépendances de l'effet, se déclenche lorsque id ou navigate changent

  if (!logementData) {
    return <div>Loading...</div>; // Afficher un message de chargement si les données du logement ne sont pas encore disponibles
  }

  const { title, host, rating, location, tags, description, equipments, pictures } = logementData; // Déstructuration des données du logement

  const handleNextSlide = () => {
    // Fonction pour passer à la diapositive suivante
    setCurrentSlide((prevSlide) => (prevSlide + 1) % pictures.length);
  };

  const handlePreviousSlide = () => {
    // Fonction pour revenir à la diapositive précédente
    setCurrentSlide((prevSlide) => (prevSlide - 1 + pictures.length) % pictures.length);
  };

  const toggleEquipments = () => {
    // Fonction pour basculer l'affichage des équipements
    setIsEquipmentsOpen(!isEquipmentsOpen);
  };

  const toggleDescription = () => {
    // Fonction pour basculer l'affichage de la description
    setIsDescriptionOpen(!isDescriptionOpen);
  };

  const contentClass = [
    isDescriptionOpen ? 'open-description' : '',
    isEquipmentsOpen ? 'open-equipments' : ''
  ].join(' '); // Déterminer les classes CSS à appliquer en fonction de l'état

  return (
    <div className="container-logement">
      <header className="header-logement">
        <div className="header_inner">
          <img className="header-logement_img" src={logo} alt="LOGO" />
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
      <main id="logement" className={`logement-content ${contentClass}`}>
        <div className="carrousel-wrapper">
          <div className="carrousel-container">
            <div className="slide-with-counter">
              <img className="logement_carrousel" src={pictures[currentSlide]} alt={`slide-${currentSlide}`} />

              {pictures.length > 1 && (
                <div className="carrousel-counter">
                  {currentSlide + 1} / {pictures.length}
                </div>
              )}
            </div>

            {pictures.length > 1 && (
              <>
                <img className="arrow arrow-left" src={ArrowLeft} alt="arrow-left" onClick={handlePreviousSlide} />
                <img className="arrow arrow-right" src={ArrowRight} alt="arrow-right" onClick={handleNextSlide} />
              </>
            )}
          </div>
        </div>
        <section className="logement-menu">
          <div className="logement-items">
            <h2 className="logement-items_title">{title}</h2>
            <p className='logement-items_text'>{location}</p>
          </div>
          <div className="logement-prenom">
            <div className="logement-prenom_text">
              <p className="logement-text">{host.name}</p>
            </div>
            <img src={Rond} alt="Rond_img_pour_comments" />
          </div>

          <div className="logement-other">
            <div className="logement-tags">
              {tags.map((tag, index) => (
                <div key={index}><p className="logement-bg">{tag}</p></div>
              ))}
            </div>
            <div className="logement-rating">
              {[...Array(5)].map((_, index) => (
                <FontAwesomeIcon
                  key={index}
                  className={`icon-rating ${index < rating ? 'filled' : 'empty'}`} 
                  icon={index < rating ? faStar : faStarRegular}
                />
              ))}
            </div>
          </div>

          <div className="logement-bar-left">
            <p className="logement-bar_text">Description</p>
            <div className="icon-container-logement-left">
              <div
                className={`v-icon-logement ${isDescriptionOpen ? 'rotate' : ''}`}
                onClick={toggleDescription}
              ></div>
            </div>
          </div>
          {isDescriptionOpen && (
            <div className={`description-left-content ${isDescriptionOpen ? 'open' : ''}`}>
              <p>{description}</p>
            </div>
          )}
          <div className={`logement-bar-right ${isDescriptionOpen ? 'shifted' : ''}`}>
            <div className="equipments-header">
              <p className="logement-bar_text">Équipements</p>
              <div
                className={`v-icon-logement ${isEquipmentsOpen ? 'rotate' : ''}`}
                onClick={toggleEquipments}
              ></div>
            </div>
            {isEquipmentsOpen && (
              <div className={`equipments-right-content ${isEquipmentsOpen ? 'open' : ''}`}>
                <ul className="equipements-list">
                  {equipments.map((item, index) => (
                    <li key={index}>{item}</li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </section>
      </main>
    </div>
  );
};

export default Logement;

