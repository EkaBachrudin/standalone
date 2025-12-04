// import bgProduct from '/assets/images/bg-product.svg';
import  './productListComponent.scss'
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { ProductListModel } from '@/domain/models/productList';
import useIsMobile from '@/hook/useIsMobile';
import { useRef, useState } from 'react';
import { getSliderProductListSettings } from './ProductListConfig';
import Link from 'next/link';
import Image from 'next/image';

interface PoductListProps {
    productListData?: ProductListModel;
}

const ProductListComponent: React.FC<PoductListProps> = ({productListData}) => {
    const [currentSlide, setCurrentSlide] = useState(0);
    const [, setActiveSlide] = useState(0);
    const sliderRef = useRef<Slider>(null);
    const isMobile = useIsMobile();

    const datalength: number | undefined = productListData?.productList?.length ? productListData?.productList?.length : 0;

    const settings = getSliderProductListSettings(isMobile, currentSlide, datalength, setActiveSlide, setCurrentSlide, sliderRef);

    if (!productListData || !productListData.productList.length) {
        return (
            <div className='productListContainer' style={{backgroundImage: `url('/assets/images/bg-product.svg')`}}>
                <div className='spinnerContainer'>
                    <div className='spinner'></div>
                    <div className='loadingText'>Memuat produk...</div>
                </div>
            </div>
        );
    }

    return (
        <>
        <div className='productListContainer' style={{backgroundImage: `url('/assets/images/bg-product.svg')`}}>
            <div className='productListContainerTop'>
                <div className='productListContainerTopTitle'>{productListData?.title}</div>
            </div>

            <div className='productListContainerDesc'>
                {productListData?.desc}
            </div>

            <div className='productListItem'>
                <Slider {...settings}>

                    {productListData?.productList.map((item) => (
                        <div key={item.title} className='item' >
                           
                            <Link href={`/landing/services`}> 
                                {/* <div className='containImage' style={{ backgroundImage: `url(${item.imageUrl})`, backgroundSize: "cover" }}></div> */}
                                <Image className='containImage' src={item.imageUrl} alt={'bg-image'} width={5000} height={5000} priority={false}/>
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
        </>
    )
}

export default ProductListComponent;