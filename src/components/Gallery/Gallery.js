import React from 'react';

const Gallery = ({ accommodations, onClick }) => {
  return (
    <div className="location_wrapper">
      {accommodations.map(item => (
        <div 
          className="location_block" 
          key={item.id} 
          onClick={() => onClick(item.id)}
        >
          <img src={item.cover} alt={item.title} className="location_image" />
          <p className="location_text">{item.title}</p>
        </div>
      ))}
    </div>
  );
};

export default Gallery;
