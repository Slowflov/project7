import React, { useState, useEffect } from 'react'; 
import { useNavigate } from 'react-router-dom'; 
import Gallery from '../Gallery/Gallery';

const AccommodationList = () => {
  const [accommodations, setAccommodations] = useState([]); 
  const navigate = useNavigate();

  useEffect(() => {
    fetch(process.env.PUBLIC_URL + '/data.json')
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then(data => setAccommodations(data))
      .catch(error => console.error('Error fetching data:', error));
  }, []);

  const handleClick = (id) => {
    navigate(`/logement/${id}`);
  };

  return (
    <Gallery accommodations={accommodations} onClick={handleClick} />
  );
};

export default AccommodationList;





