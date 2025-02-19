import Slider from 'react-slick';
import { NextArrow, PrevArrow } from '../customArrow';
import CustomDot from '../CustomDot/CustomDot';

export const getSliderProductListSettings = (
  isMobile: boolean,
  currentSlide: number,
  datalength: number,
  setActiveSlide: (index: number) => void,
  setCurrentSlide: (index: number) => void,
  sliderRef: React.RefObject<Slider | null>
) => ({
  dots: false,
  infinite: false,
  speed: 500,
  slidesToShow: 5,
  slidesToScroll: 1,
  arrows: !isMobile,
  responsive: [
      {
        breakpoint: 500,
        settings: {
          slidesToShow: 1.5,
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
  ],
  nextArrow: (
    <NextArrow
      onClick={() => sliderRef.current?.slickNext()}
      isVisible={currentSlide < (datalength ? datalength - 5 : 0)}
      extraStyle={{ position: "absolute", right: "0", top: "50%" }}
    />
  ),
  prevArrow: (
    <PrevArrow
      onClick={() => {}}
      isVisible={currentSlide > 0}
      extraStyle={{ position: "absolute", zIndex: "100", top: "49%" }}
    />
  ),
  beforeChange: (_: number, next: number) => setActiveSlide(next),
  afterChange: (current: number) => setCurrentSlide(current),
  customPaging: (i: number) => (
    <CustomDot isActive={i === currentSlide} onClick={() => setActiveSlide(i)} />
  ),
  appendDots: (dots: React.ReactNode) => (
    <div style={{ display: "flex", justifyContent: "left" }}>{dots}</div>
  ),
});
