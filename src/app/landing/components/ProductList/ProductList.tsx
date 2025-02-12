// import bgProduct from '/assets/images/bg-product.svg';
import styles from './ProductList.module.scss';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { ProductListModel } from '@/domain/models/productList';

interface PoductListProps {
    productListData?: ProductListModel;
}

const ProductList: React.FC<PoductListProps> = ({productListData}) => {

    const settings = {
        dots: false,
        infinite: false,
        speed: 500,
        slidesToShow: 5,
        centerMode: false,
        slidesToScroll: 1,
        arrows: false,
        responsive: [
            {
              breakpoint: 500,
              settings: {
                slidesToShow: 1.6,
                slidesToScroll: 1
              }
            },
            {
                breakpoint: 868,
                settings: {
                  slidesToShow: 2.4,
                  slidesToScroll: 1
                }
            },
            {
                breakpoint: 1024,
                settings: {
                  slidesToShow: 3.4,
                  slidesToScroll: 1
                }
            },
            {
                breakpoint: 1203,
                settings: {
                  slidesToShow: 4.4,
                  slidesToScroll: 1
                }
            },
            {
                breakpoint: 1338,
                settings: {
                  slidesToShow: 4.5,
                  slidesToScroll: 1
                }
            }
          ]
    };

    if (!productListData || !productListData.productList.length) {
        return <div>Loading...</div>;
    }

    return (
        <>
        <div className={styles.productListContainer} style={{backgroundImage: `url('/assets/images/bg-product.svg')`}}>
            <div className={styles.productListContainerTop}>
                <div className={styles.productListContainerTopTitle}>{productListData?.title}</div>
                <div className={styles.productListContainerTopSeeAll}>Lihat Semua</div>
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