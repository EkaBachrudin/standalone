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
  speed: 300,
  slidesToShow: 5,
  slidesToScroll: 1,
  variableWidth: false,
  arrows: !isMobile,
  responsive: [
    {
      breakpoint: 370,
      settings: {
        slidesToShow: 1.4,
        slidesToScroll: 1
      }
    },
    {
      breakpoint: 400,
      settings: {
        slidesToShow: 1.4,
        slidesToScroll: 1
      }
    },
    {
      breakpoint: 500,
      settings: {
        slidesToShow: 1.7,
        slidesToScroll: 1
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2.2,
        slidesToScroll: 1
      }
    },
    {
      breakpoint: 700,
      settings: {
        slidesToShow: 2.3,
        slidesToScroll: 1
      }
    },
    {
      breakpoint: 800,
      settings: {
        slidesToShow: 2.6,
        slidesToScroll: 1
      }
    },
    {
      breakpoint: 900,
      settings: {
        slidesToShow: 3.1,
        slidesToScroll: 1
      }
    },
    {
      breakpoint: 1100,
      settings: {
        slidesToShow: 3.4,
        slidesToScroll: 1
      }
    },
    {
      breakpoint: 1200,
      settings: {
        slidesToShow: 3.7,
        slidesToScroll: 1
      }
    },
    {
      breakpoint: 1300,
      settings: {
        slidesToShow: 3.9,
        slidesToScroll: 1
      }
    },
    {
      breakpoint: 1400,
      settings: {
        slidesToShow: 4.4,
        slidesToScroll: 1
      }
    },
    {
      breakpoint: 1500,
      settings: {
        slidesToShow: 4.7,
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
