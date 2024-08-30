import React, { useState } from 'react';

function Collapse({ title, content, isList = false }) {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={`propos_block ${isOpen ? 'open' : ''}`}>
      <h5>{title}</h5>
      <div
        className={`icon-container ${isOpen ? 'open' : ''}`}
        onClick={toggle}
      >
        <div className={`v-icon ${isOpen ? 'open' : ''}`}></div>
      </div>
      <div className={`content-container ${isOpen ? 'open' : ''}`}>
        <div className={`content ${isOpen ? 'visible' : ''}`}>
          {isList ? (
            <ul className="equipements-list">
              {content.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          ) : (
            <p>{content}</p>
          )}
        </div>
      </div>
    </div>
  );
}

export default Collapse;