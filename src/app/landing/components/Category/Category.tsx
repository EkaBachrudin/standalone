import style from './Category.module.scss';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css"
import { NextArrow, PrevArrow } from '../customArrow';
import { useRef, useState } from 'react';
import React from 'react';
import { CategoryModel } from '@/domain/models/category';
import useIsMobile from '@/hook/useIsMobile';
import Slider from 'react-slick';

interface CategoryProps {
  categoryData: CategoryModel[];
}


const Category: React.FC<CategoryProps > = ({categoryData}) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const isMobile = useIsMobile();
  const slider = useRef<Slider>(null);

  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    arrows: isMobile ? false : true,
    nextArrow: <NextArrow 
                onClick={() => slider.current?.slickNext()} 
                isVisible={currentSlide < categoryData.length - (isMobile ? 4 : 5)} 
                extraStyle={{position: 'absolute', right: '40px',top: '20%', filter: 'grayscale(100%)' }}  />,
    prevArrow: <PrevArrow 
                onClick={() => slider.current?.slickPrev()} 
                isVisible={currentSlide > 0}
                extraStyle={{position: 'absolute', left: '40px', zIndex: '100',top: '18%', filter: 'grayscale(100%)' }}  />,
    beforeChange: (current: number, next: number) => setCurrentSlide(next),
    afterChange: (current: number) => setCurrentSlide(current)
  };


    return (
      <>
        <div className={style['category-container']}>
       
          <div className={style['group']}>

            <Slider ref={slider} {...settings}>
              {categoryData?.map((item) => {
                return(
                  <div key={item.name} className={style['item']}>
                    <div className={style['item-icon']}>
                      <img src={item.icon} alt={item.name} />
                    </div>
                    
                    <div className={style['item-name']}>{item.name}</div>
                  </div>
                )
              })}
            </Slider>

          </div>
        </div>
      </>
    );
}

export default Category;