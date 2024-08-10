// src/pages/Home.js
import React from 'react';
import '../styles/main.css';

function Home() {
  return (
    <main>
      <section className="Titre-de-la-location">
        <div className="title-chez-vous">
          <h1>Chez vous, partout et ailleurs</h1>
        </div>
        <div className="location_blocks">
          <div className="location_wrapper">
            <div className="location-inner">
              <div className="location_block">
                <p className="location_text">Titre de la location</p>
              </div>
              <div className="location_block">
                <p className="location_text">Titre de la location</p>
              </div>
              <div className="location_block">
                <p className="location_text">Titre de la location</p>
              </div>
            </div>
            <div className="location-inner">
              <div className="location_block">
                <p className="location_text">Titre de la location</p>
              </div>
              <div className="location_block">
                <p className="location_text">Titre de la location</p>
              </div>
              <div className="location_block">
                <p className="location_text">Titre de la location</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

export default Home;


