import React from 'react';
import { BrowserRouter as Router, Route, Routes, useLocation, Outlet } from 'react-router-dom'; // Импортируйте Outlet
import './styles/main.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import Propos from './pages/Propos';
import Logement from './pages/Logement';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />   {/* Главная страница */}
          <Route path="/Propos" element={<Propos />} /> {/* Вторая страница */}
          <Route path="/Logement" element={<Logement />} /> {/* Третья страница */}
        </Route>
      </Routes>
    </Router>
  );
}

const Layout = () => {
  const location = useLocation();

  // Проверяем, если текущий путь - это Page3
  const isLogement = location.pathname === '/Logement';

  return (
    <div>
      {!isLogement && <Header />}
      <Outlet />
      <Footer />
    </div>
  );
};

export default App;

