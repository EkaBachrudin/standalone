'use client'
import React, { useEffect, useState } from 'react';
import './Header.scss';
import SlideMenu from '../SideMenu/SlideMenu';
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
          <div className="w-36 h-16 flex items-center justify-center">
            <Image
  src='/logoipsum.svg'
  width={144}
  height={64}
  alt="logo"
  className='w-[144px] h-[64px] object-contain'
  priority={true}
  sizes="144px"
/>
          </div>
          <div className='deksMenu'>
            {menuItems.length > 0 ? (
              menuItems?.map((item, index) => (
                <div className='items' key={index}>
                  <DropdownMenu
                    options={item}
                  />
                </div>
              ))
            ) : (
              <div className="flex gap-10 items-baseline">
                {[1, 2, 3, 4].map((i) => (
                  <div key={i} className="h-6 w-20 bg-gray-200 rounded animate-pulse"></div>
                ))}
              </div>
            )}
          </div>

          <button onClick={toggleMenu} className='lg:hidden'>
            <Image
  src='/assets/icons/hamburger-dark.svg'
  width={40}
  height={40}
  alt="Menu"
  className='w-[24px] h-[24px] object-contain'
  sizes="24px"
/>
          </button>
        </div>

      </header>

      <SlideMenu isOpen={isMenuOpen} onClose={closeMenu} menuItems={menuItems} />
    </>
  );
};

export default Header;
