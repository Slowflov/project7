// src/components/AccommodationList.js
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const AccommodationList = () => {
  const [accommodations, setAccommodations] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    // Замените путь на путь к вашему JSON-файлу
    fetch('/data.json')
      .then(response => response.json())
      .then(data => setAccommodations(data))
      .catch(error => console.error('Error fetching data:', error));
  }, []);

  const handleClick = (id) => {
    navigate(`/logement/${id}`);
  };

  return (
    <div className="location_wrapper">
      {accommodations.map(item => (
        <div className="location_block" key={item.id} onClick={() => handleClick(item.id)}>
          <img src={item.cover} alt={item.title} className="location_image" />
          <p className="location_text">{item.title}</p>
        </div>
      ))}
    </div>
  );
};

export default AccommodationList;



