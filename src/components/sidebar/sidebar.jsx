import React, { useState } from 'react';
import './sidebar.css';

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);

 

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={`sidebar-container ${isOpen ? 'open' : ''}`}>
      <div className="burger_menu" onClick={toggleSidebar}>
        <div className="line"></div>
        <div className="line"></div>
        <div className="line"></div>
      </div>
      <div className={`sidebar ${isOpen ? 'open' : ''}`} onClick={(e) => e.stopPropagation()}>
        <div className="lipo">Lipo 1</div>
        <div className="lipo">Lipo 2</div>
        <div className="lipo">Lipo 3</div>
        <div className="lipo">Lipo 4</div>
        <div className="lipo">Lipo 5</div>
      </div>
    </div>
  );
};

export default Sidebar;
