'use client'
import React, { useEffect, useState } from 'react';
import './Header.scss';
import SlideMenu from './SideMenu/SlideMenu';
import { MenuItem } from '@/domain/models/menuItem';
import { menuRepository } from '@/data/repositories/menuRepository';
import DropdownMenu from '../Navbar/Navbar';
import Image from 'next/image';

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
          <Image src='/next.svg' className="App-logo" width={40} height={40} alt="logo" />
          <div className='deksMenu'>
            {menuItems?.map((item, index) => (
              <div className='items' key={index}>
                <DropdownMenu
                  options={item}
                />

              </div>
            ))}
          </div>

          <button onClick={toggleMenu} className='lg:hidden'>
            <Image src='/assets/icons/hamburger-dark.svg' width={40} height={40} className="hamburger" alt="hamd" />
          </button>
        </div>

      </header>

      <SlideMenu isOpen={isMenuOpen} onClose={closeMenu} menuItems={menuItems} />
    </>
  );
};

export default Header;
