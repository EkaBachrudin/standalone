'use client'

import { useEffect, useState } from 'react';
import { footerStaticData, socialStaticContent } from './Footer.data';
import './Footer.scss';
import { SocialContent } from './Footer.type';
import Image from 'next/image';

const FooterComponent = () => {
  const [footerData, setfooterData] = useState(footerStaticData);
  const [windowWidth, setWindowWidth] = useState(0);
  const socialData: SocialContent = socialStaticContent;

  useEffect(() => {
    setfooterData(footerData);

    if (typeof window !== 'undefined') {
        const handleResize = () => {
            setWindowWidth(window.innerWidth);
        };
      
        window.addEventListener('resize', handleResize);
        handleResize();
    
        return () => {
            window.removeEventListener('resize', handleResize);
    
            setfooterData(footerData);
        };
    }
  }, [footerData]);

  const openMobileDropdown = (index: number) => {
    setfooterData(prevMenuItems =>
        prevMenuItems.map((item, i) =>
            i === index ? { ...item, isOpen: !item.isOpen } : item
        )
    );
  };

  return (
      <>
        <div className='footer-wrapper pb-36'>
            <div className='md:flex md:justify-between md:gap-10 max-w-[1440px] mx-auto md:px-[100px] md:py-16'>
                 <div className='w-full xl:w-[60%]'>
                  <section className='section-app'>
                      <div>
                          <div className="title">Gain more with MyTelkomsel App</div>
                          <div className='lg:flex lg:gap-12 lg:items-start'>
                              <Image src="/logoipsumnoword.svg" width={70} height={70} alt="tselapp" className='mt-4 size-auto' />
                              <div>
                                  <div className='flex gap-2 mt-4'>
                                      <Image src="/assets/images/download-playstore.svg" width={144} height={40} alt="Google Play" />
                                      <Image src="/assets/images/download-playstore.svg" width={144} height={40} alt="Google Play" />
                                  </div>

                                  <div className='flex gap-2 mt-4'>
                                      <Image src="/assets/images/download-playstore.svg" width={144} height={40} alt="Google Play" />
                                      <Image src="/assets/images/download-playstore.svg" width={144} height={40} alt="Google Play" />
                                  </div>
                              </div>
                          </div>
                      </div>
                  </section>

                  <hr className="border-t border-primary-rzaGrey40 my-4 mt-6" />

                  <section className='section-social'>
                      <div className="title">{socialData.title}</div>
                      <div className='items'>
                          {socialData.items.map((item, index) => (
                              <Image key={index} src={item.imageUrl} width={30} height={30} alt="Google Play" priority={true} />
                          ))}
                      </div>
                  </section>
              </div>

            <section className='section-menu'>
                {footerData.map((menu, index) => (
                    <div className='xl:w-1/3' key={index}>
                        <div className='title' onClick={() => openMobileDropdown(index)}>
                            <div>{menu.title}</div>
                            <Image width={30} height={30} src={'/assets/icons/chevron-' + (menu.isOpen ? 'up.svg' : 'down.svg')} alt="down"/>
                        </div>
                        <ul className={`${menu.isOpen || windowWidth > 1280 ? 'block' : 'hidden'}`}>
                                {menu.items.map((item, itemIndex) => (
                                    <li key={itemIndex}>
                                        <a href={item.url}>{item.name}</a>
                                    </li>
                                ))}
                        </ul>
                    </div>
                ))}
            </section>
            </div>
             
        </div>
      </>
  )
};

export default FooterComponent;
