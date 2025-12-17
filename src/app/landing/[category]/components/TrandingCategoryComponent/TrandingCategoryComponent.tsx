// import bgProduct from '/assets/images/bg-product.svg';
import './TrandingCategoryComponent.scss'
import useIsMobile from "@/hook/useIsMobile";
import { useState, useRef } from "react";
import Slider from "react-slick";
import { GetTrandingCategoryModel } from "@/domain/models/getTrandingCategory";
import { TrandingSliderConfig } from './TrandingCategoryComponent.config';
import Link from 'next/link';
import Image from 'next/image';


interface TrandingListProps {
    trandingList?: GetTrandingCategoryModel;
}

const TrandingCategoryComponent: React.FC<TrandingListProps> = ({trandingList}) => {
    const [currentSlide, setCurrentSlide] = useState(0);
    const [, setActiveSlide] = useState(0);
    const sliderRef = useRef<Slider>(null);
    const isMobile = useIsMobile();

    const datalength: number | undefined = trandingList?.productList?.length ? trandingList?.productList?.length : 0;

    const settings = TrandingSliderConfig(isMobile, currentSlide, datalength, setActiveSlide, setCurrentSlide, sliderRef);

    if (!trandingList || !trandingList.productList.length) {
        return <div>Loading...</div>;
    }

    return (
        <>
        <div className='category-tranding-Container' style={{backgroundImage: `url('/assets/images/bg-tranding.svg')`}}>
            <div className='mx-auto max-w-[1440px]'>
                     <div className={`responsive-title ${currentSlide !== 0 ? 'blur-effect' : ''}`}>
            <div className='category-tranding-ContainerTop'>
                    <div className='category-tranding-ContainerTopTitle'>{trandingList?.title}</div>
                </div>

                <div className='category-tranding-ContainerDesc'>
                    {trandingList?.desc}
                </div>
           </div>

            <div className={`category-tranding-Item ${currentSlide === 0 ? 'scroll-behav1' : 'scroll-behav2'}`}>
                <Slider {...settings}>
                    {trandingList?.productList.map((item) => (
                        <div key={item.title} className='item'>
                           <Link href={`/merchant/productname-v1`}>
                                <Image className='containImage' src={item.imageUrl} alt={'bg-image'} width={1000} height={1000} priority={true}/>
                                <div className='content'>
                                    <div className='contentTitle'>{item.title}</div>
                                    <div className='contentDesc'>{item.desc}</div>
                                </div>
                           </Link>
                        </div>
                    ))}
                </Slider>
            </div>
            </div>
          
        </div>
        </>
    )
}

export default TrandingCategoryComponent;