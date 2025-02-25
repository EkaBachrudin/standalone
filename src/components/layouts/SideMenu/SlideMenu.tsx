import React, { useEffect, useState } from 'react';
import styles from './SlideMenu.module.scss';
import { MenuItem } from '@/domain/models/menuItem';
import Image from 'next/image';

interface SideMenuProps {
    isOpen: boolean;
    onClose: () => void;
    menuItems: MenuItem[]
}

const SlideMenu: React.FC<SideMenuProps> = ({ isOpen, onClose, menuItems }) => {
  const [menuItemsVar, setMenuItemsVar] = useState(menuItems);
  
  useEffect(() => {
    setMenuItemsVar(menuItems);
  }, [menuItems]);


  const openChildMenu = (index: number) => {
    setMenuItemsVar(prevMenuItems =>
      prevMenuItems.map((item, i) =>
        i === index ? { ...item, isChildOpen: !item.isChildOpen } : item
      )
    );
  };

  return (
      <div className={`${styles['sidemenu-mobile-container']}`}>
          <div
              className={`${styles['side-menu']} ${isOpen ? styles.open : ''}`}
          >
              <div className="flex justify-between pt-4 px-4">
                  <Image src="/logoipsum.svg" width={60} height={40} className="w-28" alt="logo" />

                  <button onClick={onClose} className="">
                      <Image src="/assets/icons/x.svg" width={30} height={30} alt="close"/>
                  </button>
              </div>

              <nav className={`${styles['navigation']}`}>
                  {menuItemsVar.map((item, index) => (
                      <div key={index}>
                        <div className={styles.item} key={item.name}>
                          <div> {item.name} </div>
                          <div>
                              {item.childs && (
                                <button onClick={() => openChildMenu(index)}>
                                    <Image width={40} height={40} src={'/assets/icons/chevron-' + (item.isChildOpen ? 'up.svg' : 'down.svg')} alt="down"/>
                                </button>
                              )}
                          </div>
                        </div>
                        {item.childs && item.isChildOpen && (
                          <div>
                            {item.childs.map((subItem, subIndex) => (
                              <div key={subIndex}>
                                <div className='mb-3 mt-2 ml-2'>{subItem.childName}</div>
                              </div>
                            ))}
                          </div>
                        )}
                        
                      </div>
                      
                  ))}
              </nav>
          </div>

          {/* Overlay (to close the menu when clicking outside) */}
          {isOpen && (
              <button
                  onClick={onClose}
                  className={`${styles['overlay']}`}
              ></button>
          )}
      </div>
  )
};

export default SlideMenu;
