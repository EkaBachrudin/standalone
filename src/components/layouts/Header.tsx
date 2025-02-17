'use client'
import React, { useEffect, useState } from 'react';
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
  
  
  function openChildMenu(index: number): void {
    throw new Error('Function not implemented.');
  }

  return (
   <>
    <header className="header-container">
     <div className="header">
      <img src='/next.svg' className="App-logo" alt="logo" />
      <div className='deksMenu'>
        { menuItems?.map( (item, index) => (
         <div className='items'>
          <div>{item.name}</div>

          {item.childs && (
            <button onClick={() => openChildMenu(index)}>
                <img src={'/assets/icons/chevron-' + (item.isChildOpen ? 'up.svg' : 'down.svg')} alt="down"/>
            </button>
          )}
                                
         </div>
        ))}
      </div>
      <button onClick={toggleMenu} className='lg:hidden'>
        <img src='/assets/icons/hamburger-dark.svg' className="hamburger" alt="hamd" />
      </button>
     </div>
    </header>
    
    <SlideMenu isOpen={isMenuOpen} onClose={closeMenu} menuItems={menuItems}/>
   </>
  );
};

export default Header;
