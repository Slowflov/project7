// src/pages/Propos.js
import React from 'react';
import '../../styles/main.css';
import Collapse from '../../components/Collapse/Collapse';

const Propos = () => {
  const contentItems = [
    {
      title: 'Fiabilité',
      content: 'Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées par nos équipes.',
      isList: false
    },
    {
      title: 'Respect',
      content: 'La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entrainera une exclusion de notre plateforme',
      isList: false
    },
    {
      title: 'Service',
      content: 'La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entrainera une exclusion de notre plateforme',
      isList: false
    },
    {
      title: 'Sécurité',
      content: 'La securite est la priorite de Kasa. Aussi bien pour nos hotes que pour les voyageurs, chaque logement corresponde aux criteres de securite etablis par nos services. En laissant une note aussi bien a l\'hotel qu\'au locataire, cela perment a nos equipes de verifier que les standards sont bien respectes. Nous organisons egalement des ateliers sur la securite domestique pour nos hotes.',
      isList: false
    }
  ];

  return (
    <main>
      <section className="propos">
        <div className="propos_img"></div>

        <div className="propos-menu">
          {contentItems.map((item, index) => (
            <Collapse
              key={index}
              title={item.title}
              content={item.content}
              isList={item.isList}
            />
          ))}
        </div>
      </section>
    </main>
  );
};

export default Propos;



