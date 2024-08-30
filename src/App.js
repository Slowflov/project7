import React from 'react';
import { BrowserRouter as Router, Route, Routes, useLocation, Outlet } from 'react-router-dom';
import './styles/main.css';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Home from './pages/Home/Home';
import Propos from './pages/Propos/Propos';
import Logement from './pages/Logement/Logement';
import NotFoundPage from './pages/NotFoundPage/NotFoundPage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          {/* Route pour la page d'accueil */}
          <Route index element={<Home />} />
          
          {/* Route pour la deuxième page */}
          <Route path="/Propos" element={<Propos />} />
          
          {/* Route pour la troisième page avec un paramètre id */}
          <Route path="/logement/:id" element={<Logement />} />
          
          {/* Route pour la page 404 */}
          <Route path="*" element={<NotFoundPage />} />

          {/* Gestion des routes non existantes */}
          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
    </Router>
  );
}

const Layout = () => {
  const location = useLocation();

  // Vérifie si le chemin actuel commence par /logement (en minuscules)
  const isLogement = location.pathname.toLowerCase().startsWith('/logement');

  return (
    <div>
      {/* Affiche le Header commun seulement si ce n'est pas la page Logement */}
      {!isLogement && <Header />}
      <Outlet />
      <Footer />
    </div>
  );
};

export default App;





