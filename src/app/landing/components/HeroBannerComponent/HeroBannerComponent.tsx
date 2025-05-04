import React, { useRef, useState } from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styles from './HeroBannerComponent.module.scss';

import { HeroBannerModel } from '@/domain/models/heroBanner';
import useIsMobile from '@/hook/useIsMobile';
import Link from 'next/link';
import { getSliderSettings } from './HeroBannerComponentConfig';

interface HeroBannerProps {
    bannerDataProps: HeroBannerModel | undefined;
}

const HeroBannerComponent: React.FC<HeroBannerProps> = ({ bannerDataProps }) => {
    const [, setActiveSlide] = useState(0);
    const [currentSlide, setCurrentSlide] = useState(0);
    const isMobile = useIsMobile();
    const slider = useRef<Slider>(null);
    const sliderRef = useRef<Slider>(null);

    const datalength: number | undefined = bannerDataProps?.items?.length ? bannerDataProps?.items?.length : 0;

    const settings = getSliderSettings(isMobile, currentSlide, datalength, setActiveSlide, setCurrentSlide, sliderRef);

    return (
        <>
            <div className={styles['hero-baner-container']} style={{ backgroundImage: `url('/assets/images/bg-hero-banner.svg')` }}>
                <div className={styles['main-title']}>{bannerDataProps?.title}</div>
                <div className={styles['main-desc']}>{bannerDataProps?.desc}</div>
                <div className={styles['slider']}>
                    <Slider ref={slider} {...settings}>
                        {bannerDataProps?.items.map((item) => (
                            <div key={item.title}>
                                <div className={styles['banner-items']} style={{ backgroundImage: `url(${item.imageUrl})`, backgroundSize: "cover" }}>
                                    <div className={styles['banner-items-inner']}>
                                        <div className={styles['item-content']}>
                                            <div className={styles['banner-title']}> {item.title}</div>
                                            <div className={styles['banner-desc']}> {item.desc}</div>
                                            <Link href={item.pageUrl} passHref>
                                                <button className={styles['banner-button']}>Cek Paket</button>
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </Slider>
                </div>
            </div>
        </>
    )
}

export default HeroBannerComponent;