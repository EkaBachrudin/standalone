import React, { useRef, useState } from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styles from './HeroBanner.module.scss';

import { NextArrow, PrevArrow } from '../customArrow';
import CustomDot from '../CustomDot/CustomDot';
import { HeroBannerModel } from '@/domain/models/heroBanner';
import useIsMobile from '@/hook/useIsMobile';
import Link from 'next/link';

interface HeroBannerProps {
    bannerDataProps: HeroBannerModel | undefined;
}

const HeroBanner: React.FC<HeroBannerProps> = ({ bannerDataProps }) => {
    const [activeSlide, setActiveSlide] = useState(0);
    const [currentSlide, setCurrentSlide] = useState(0);
    const isMobile = useIsMobile();
    const slider = useRef<Slider>(null);

    const datalength: number | undefined = bannerDataProps?.items?.length;

    const settings = {
        dots: isMobile ? false : true,
        infinite: false,
        speed: 500,
        slidesToShow: isMobile ? 0.8 : 2,
        slidesToScroll: 1,
        arrows: isMobile ? false : true,
        centerPadding: '400px',
        nextArrow: <NextArrow
            onClick={() => slider.current?.slickNext()}
            isVisible={currentSlide < (datalength ? datalength : 0) - (isMobile ? 1 : 2)}
            extraStyle={{ position: 'absolute', right: '0', top: '50%' }} />,
        prevArrow: <PrevArrow
            onClick={function (): void { }}
            isVisible={currentSlide > 0}
            extraStyle={{ position: 'absolute', zIndex: '100', top: '49%' }} />,
        beforeChange: (current: number, next: number) => setActiveSlide(next),
        afterChange: (current: number) => setCurrentSlide(current),
        customPaging: (i: number) => (
            <CustomDot
                isActive={i === activeSlide}
                onClick={() => setActiveSlide(i)}
            />
        ),
        appendDots: (dots: string[]) => (
            <div style={{ display: 'flex', justifyContent: 'left' }}>
                {dots}
            </div>
        ),
    };


    return (
        <>
            <div className={styles['hero-baner-container']} style={{ backgroundImage: `url('assets/images/bg-hero-banner.svg')` }}>
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

export default HeroBanner;