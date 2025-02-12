import React, { useEffect, useState } from 'react';

import logo from '../../logo.svg'; 
import hamburger from '../../assets/icons/hamburger-dark.svg'
import './Header.scss';
import SlideMenu from './SideMenu/SlideMenu';
import { MenuItem } from '@/domain/models/menuItem';
import { menuRepository } from '@/data/repositories/menuRepository';

const Header: React.FC = () => {

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [menuItems, setMenuItems] = useState<MenuItem[]>([]);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchMenuItems = async () => {
      try {
        const items = await menuRepository.getMenuItems();
        setMenuItems(items);
      } catch {
        setError("Failed to load menu items");
      }
    };

    fetchMenuItems();
  }, []);

  if (error) {
    return <div>{error}</div>;
  }

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };
  
  
  return (
   <>
    <header className="header-container">
     <div className="header">
      <img src={logo} className="App-logo" alt="logo" />
      <button onClick={toggleMenu}>
        <img src={hamburger} className="hamburger" alt="hamd" />
      </button>
     </div>
    </header>
    
    <SlideMenu isOpen={isMenuOpen} onClose={closeMenu} menuItems={menuItems}/>
   </>
  );
};

export default Header;
