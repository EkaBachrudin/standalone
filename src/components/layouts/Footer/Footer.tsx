'use client'

import { useEffect, useState } from 'react';
import { footerStaticData, socialStaticContent } from './Footer.data';
import './Footer.scss';
import type { FooterMenu, SocialContent } from './Footer.type';
import Image from 'next/image';

const FooterComponent = () => {
  const [footerData, setfooterData] = useState(footerStaticData);
  const socialData: SocialContent = socialStaticContent;

  useEffect(() => {
    setfooterData(footerData);
  }, [footerData]);

  const openMobileDropdown = (index: number) => {
    setfooterData(prevMenuItems =>
        prevMenuItems.map((item, i) =>
            i === index ? { ...item, isOpen: !item.isOpen } : item
        )
    );

      console.log(footerData)
  };

  return (
      <>
        <div className='footer-wrapper pb-36'>
            <section className='section-app'>
                <div>
                    <div className="title">Gain more with MyTelkomsel App</div>
                    <div className='sm:flex sm:gap-12 sm:items-start'>
                        <Image src="assets/images/tsel-app.svg" width={56} height={56} alt="tselapp" className='mt-4' />
                        <div>
                            <div className='flex gap-2 mt-4'>
                                <Image src="assets/images/download-playstore.svg" width={144} height={40} alt="Google Play" />
                                <Image src="assets/images/download-playstore.svg" width={144} height={40} alt="Google Play" />
                            </div>

                            <div className='flex gap-2 mt-4'>
                                <Image src="assets/images/download-playstore.svg" width={144} height={40} alt="Google Play" />
                                <Image src="assets/images/download-playstore.svg" width={144} height={40} alt="Google Play" />
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
                    <Image key={index} src={item.imageUrl} width={30} height={30} alt="Google Play" />
                ))}
                </div>
            </section>

            <section className='section-menu'>
                {footerData.map((menu, index) => (
                    <div key={index}>
                        <div className='title' onClick={() => openMobileDropdown(index)}>
                            <div>{menu.title}</div>
                            <Image width={30} height={30} src={'/assets/icons/chevron-' + (menu.isOpen ? 'up.svg' : 'down.svg')} alt="down"/>
                        </div>
                        {menu.isOpen && (
                            <ul>
                                {menu.items.map((item, itemIndex) => (
                                    <li key={itemIndex}>
                                        <a href={item.url}>{item.name}</a>
                                    </li>
                                ))}
                            </ul>
                        )}
                    </div>
                ))}
            </section>
        </div>
      </>
  )
};

export default FooterComponent;
