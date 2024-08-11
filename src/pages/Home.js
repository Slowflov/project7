// src/pages/Home.js
import React from 'react';
import AccommodationList from '../components/AccommodationList';
import '../styles/main.css';

function Home() {
  return (
    <main>
      <section className="Titre-de-la-location">
        <div className="title-chez-vous">
          <h1>Chez vous, partout et ailleurs</h1>
        </div>
        <AccommodationList />
      </section>
    </main>
  );
}

export default Home;



