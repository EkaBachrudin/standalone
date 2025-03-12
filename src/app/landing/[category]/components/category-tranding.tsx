// import bgProduct from '/assets/images/bg-product.svg';
import './category-tranding.scss'
import useIsMobile from "@/hook/useIsMobile";
import { useState, useRef } from "react";
import Slider from "react-slick";
import { getSliderProductListSettings } from "../../components/ProductList/ProductListConfig";
import { GetTrandingCategoryModel } from "@/domain/models/getTrandingCategory";

interface TrandingListProps {
    trandingList?: GetTrandingCategoryModel;
}

const CategoryTranding: React.FC<TrandingListProps> = ({trandingList}) => {
    const [currentSlide, setCurrentSlide] = useState(0);
    const [, setActiveSlide] = useState(0);
    const sliderRef = useRef<Slider>(null);
    const isMobile = useIsMobile();

    const datalength: number | undefined = trandingList?.productList?.length ? trandingList?.productList?.length : 0;

    const settings = getSliderProductListSettings(isMobile, currentSlide, datalength, setActiveSlide, setCurrentSlide, sliderRef);

    if (!trandingList || !trandingList.productList.length) {
        return <div>Loading...</div>;
    }

    return (
        <>
        <div className='category-tranding-Container' style={{backgroundImage: `url('/assets/images/bg-tranding.svg')`}}>
            <div className='category-tranding-ContainerTop'>
                <div className='category-tranding-ContainerTopTitle'>{trandingList?.title}</div>
            </div>

            <div className='category-tranding-ContainerDesc'>
                {trandingList?.desc}
            </div>

            <div className='category-tranding-Item'>
                <Slider {...settings}>
                    {trandingList?.productList.map((item) => (
                        <div key={item.title} className='item' >
                            <div className='containImage' style={{ backgroundImage: `url(${item.imageUrl})`, backgroundSize: "cover" }}></div>
                            <div className='content'>
                                <div className='contentTitle'>{item.title}</div>
                                <div className='contentDesc'>{item.desc}</div>
                            </div>
                        </div>
                    ))}
                </Slider>
            </div>
        </div>
        </>
    )
}

export default CategoryTranding;