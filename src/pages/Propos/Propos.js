// src/pages/Propos.js
import React, { useState } from 'react';
import '../../styles/main.css';

const Propos = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleContent = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <main>
      <section className="propos">
        <div className="propos_img"></div>
        
        <div className="propos-menu">
          {[
            {
              title: 'Fiabilité',
              content: 'Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées par nos équipes.'
            },
            {
              title: 'Respect',
              content: 'La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entrainera une exclusion de notre plateforme'
            },
            {
              title: 'Service',
              content: 'La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entrainera une exclusion de notre plateforme'
            },
            {
              title: 'Sécurité',
              content: 'La securite est la priorite de Kasa. Aussi bien pour nos hotes que pour les voyageurs, chaque logement corresponde aux criteres de securite etablis par nos services. En laissant une note aussi bien a l\'hotel qu\'au locataire, cela perment a nos equipes de verifier que les standards sont bien respectes. Nous organisons egalement des ateliers sur la securite domestique pour nos hotes.'
            }
          ].map((item, index) => (
            <div key={index} className={`propos_block ${activeIndex === index ? 'open' : ''}`}>
              <h5>{item.title}</h5>
              <div 
                className={`icon-container ${activeIndex === index ? 'open' : ''}`}
                onClick={() => toggleContent(index)}
              >
                <div className={`v-icon ${activeIndex === index ? 'open' : ''}`}></div>
              </div>
              <div className={`content-container ${activeIndex === index ? 'open' : ''}`}>
                <div className={`content ${activeIndex === index ? 'visible' : ''}`}>
                  <p>{item.content}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
};

export default Propos;


