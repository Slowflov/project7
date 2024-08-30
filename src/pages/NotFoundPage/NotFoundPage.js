// src/components/NotFoundPage.js
import React from 'react';
import '../../styles/main.css';
import { Link } from 'react-router-dom';
import notFoundImage from '../../assets/image/404.png';
const NotFoundPage = () => {
  return (
    <main>
      <section className="error">
      <img className="error_img" src={notFoundImage} alt="error_img-404" />
        <h2 className="error_title">Oups! La page que vous demandez n'existe pas.</h2>
        <Link to="/" className="error_link">Retourner sur la page d’accueil</Link>
      </section>
    </main>
  );
};

export default NotFoundPage;