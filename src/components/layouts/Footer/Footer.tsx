import { footerStaticData, socialStaticContent } from './Footer.data';
import './Footer.scss';
import type { FooterMenu, SocialContent } from './Footer.type';
import Image from 'next/image';

const FooterComponent = () => {
  const footerData: FooterMenu[] = footerStaticData;
  const socialData: SocialContent = socialStaticContent;

  const openChildMenu = (index: number) => {
    footerData.map((item, i) =>
        i === index ? { ...item, isOpen: !item.isOpen } : item
      )
  };

  return (
      <>
        <div className='footer-wrapper'>
            <section className='section-app'>
                <div className="title">Gain more with MyTelkomsel App</div>
                <Image src="assets/images/tsel-app.svg" width={56} height={56} alt="tselapp" className='mt-4' />

                <div className='flex gap-2 mt-4'>
                    <Image src="assets/images/download-playstore.svg" width={144} height={40} alt="Google Play" />
                    <Image src="assets/images/download-playstore.svg" width={144} height={40} alt="Google Play" />
                </div>

                <div className='flex gap-2 mt-4'>
                    <Image src="assets/images/download-playstore.svg" width={144} height={40} alt="Google Play" />
                    <Image src="assets/images/download-playstore.svg" width={144} height={40} alt="Google Play" />
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
                        <button className='title' onClick={() => openChildMenu(index)}>
                            <span>{menu.title}</span>
                            <Image width={30} height={30} src={'/assets/icons/chevron-' + (menu.isOpen ? 'up.svg' : 'down.svg')} alt="down"/>
                        </button>
                        <ul>
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
      </>
  )
};

export default FooterComponent;
