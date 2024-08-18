// src/components/AccommodationList.js
import React, { useState, useEffect } from 'react'; // Importer React et les hooks useState et useEffect
import { useNavigate } from 'react-router-dom'; // Importer useNavigate pour la navigation

const AccommodationList = () => {
  const [accommodations, setAccommodations] = useState([]); // État pour stocker la liste des logements
  const navigate = useNavigate(); // Fonction pour naviguer entre les pages

  useEffect(() => {
    // Effet pour récupérer les données des logements lorsque le composant est monté
    // Remplacez le chemin par le chemin de votre fichier JSON
    fetch('/data.json')
      .then(response => response.json())
      .then(data => setAccommodations(data)) // Mettre à jour l'état avec les données récupérées
      .catch(error => console.error('Error fetching data:', error)); // Loguer les erreurs de récupération des données
  }, []); // Le tableau vide [] signifie que cet effet s'exécute une seule fois lors du premier rendu du composant

  const handleClick = (id) => {
    // Fonction pour naviguer vers la page de détails du logement
    navigate(`/logement/${id}`);
  };

  return (
    <div className="location_wrapper"> {/* Conteneur principal pour la liste des logements */}
      {accommodations.map(item => (
        <div 
          className="location_block" 
          key={item.id} 
          onClick={() => handleClick(item.id)} // Gérer le clic pour naviguer vers les détails du logement
        >
          <img src={item.cover} alt={item.title} className="location_image" /> {/* Afficher l'image du logement */}
          <p className="location_text">{item.title}</p> {/* Afficher le titre du logement */}
        </div>
      ))}
    </div>
  );
};

export default AccommodationList; // Exporter le composant AccommodationList pour l'utiliser dans d'autres fichiers




