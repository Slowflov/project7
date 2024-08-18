import React from 'react';
import { BrowserRouter as Router, Route, Routes, useLocation, Outlet } from 'react-router-dom';
import './styles/main.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import Propos from './pages/Propos';
import Logement from './pages/Logement';
import NotFoundPage from './pages/NotFoundPage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />   {/* Главная страница */}
          <Route path="/Propos" element={<Propos />} /> {/* Вторая страница */}
          <Route path="/logement/:id" element={<Logement />} /> {/* Третья страница с параметром id */}
          <Route path="*" element={<NotFoundPage />} /> {/* Маршрут для 404 страницы */}
          <Route path="*" element={<NotFoundPage />} /> {/* Обработка несуществующих маршрутов */}
        </Route>
      </Routes>
    </Router>
  );
}

const Layout = () => {
  const location = useLocation();

  // Проверяем, если текущий путь начинается с /logement (с маленькой буквы)
  const isLogement = location.pathname.toLowerCase().startsWith('/logement');

  return (
    <div>
      {/* Отображаем общий Header, только если это не Logement */}
      {!isLogement && <Header />}
      <Outlet />
      <Footer />
    </div>
  );
};

export default App;




