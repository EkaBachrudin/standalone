// import bgProduct from '/assets/images/bg-product.svg';
import styles from './ProductList.module.scss';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { ProductListModel } from '@/domain/models/productList';
import useIsMobile from '@/hook/useIsMobile';
import { useRef, useState } from 'react';
import { getSliderProductListSettings } from './ProductListConfig';

interface PoductListProps {
    productListData?: ProductListModel;
}

const ProductList: React.FC<PoductListProps> = ({productListData}) => {
    const [currentSlide, setCurrentSlide] = useState(0);
    const [activeSlide, setActiveSlide] = useState(0);
    const sliderRef = useRef<Slider>(null);
    const isMobile = useIsMobile();

    const datalength: number | undefined = productListData?.productList?.length ? productListData?.productList?.length : 0;

    const settings = getSliderProductListSettings(isMobile, currentSlide, datalength, setActiveSlide, setCurrentSlide, sliderRef);

    if (!productListData || !productListData.productList.length) {
        return <div>Loading...</div>;
    }

    return (
        <>
        <div className={styles.productListContainer} style={{backgroundImage: `url('/assets/images/bg-product.svg')`}}>
            <div className={styles.productListContainerTop}>
                <div className={styles.productListContainerTopTitle}>{productListData?.title}</div>
            </div>

            <div className={styles.productListContainerDesc}>
                {productListData?.desc}
            </div>

            <div className={styles.productListItem}>
                <Slider {...settings}>
                    {productListData?.productList.map((item) => (
                        <div key={item.title} className={styles.item} >
                            <div className={styles.containImage} style={{ backgroundImage: `url(${item.imageUrl})`, backgroundSize: "cover" }}></div>
                            <div className={styles.content}>
                                <div className={styles.contentTitle}>{item.title}</div>
                                <div className={styles.contentDesc}>{item.desc}</div>
                            </div>
                        </div>
                    ))}
                </Slider>
            </div>
        </div>
        </>
    )
}

export default ProductList;