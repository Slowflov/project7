import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import '../../styles/main.css';
import { Link } from 'react-router-dom';
import logo from '../../assets/image/LOGO.png';
import ArrowLeft from '../../assets/image/arrow_left.png';
import ArrowRight from '../../assets/image/arrow_right.png';
import Rond from '../../assets/image/rond.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import { faStar as faStarRegular } from '@fortawesome/free-regular-svg-icons';
import Collapse from '../../components/Collapse/Collapse';

const Logement = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [logementData, setLogementData] = useState(null);
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    fetch('/data.json')
      .then(response => response.json())
      .then(data => {
        const logement = data.find(item => item.id === id);
        if (logement) {
          setLogementData(logement);
        } else {
          navigate('/404', { replace: true });
        }
      })
      .catch(error => {
        console.error('Error fetching data:', error);
        navigate('/404', { replace: true });
      });
  }, [id, navigate]);

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
      <main id="logement" className="logement-content">
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
          <div class="container-logement-bars">
  <div class="logement-bar-left">
    <Collapse
      title="Description"
      content={description}
      isList={false}
    />
  </div>

  <div class="logement-bar-right">
    <Collapse
      title="Équipements"
      content={equipments}
      isList={true}
    />
  </div>
</div>
        </section>
      </main>
    </div>
  );
};

export default Logement;


