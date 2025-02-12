import { NextArrow, PrevArrow } from '../customArrow';
import CustomDot from '../CustomDot/CustomDot';

export const getSliderSettings = (
  isMobile: boolean,
  currentSlide: number,
  datalength: number,
  setActiveSlide: (index: number) => void,
  setCurrentSlide: (index: number) => void,
  sliderRef: React.RefObject<any>
) => ({
  dots: !isMobile,
  infinite: false,
  speed: 500,
  slidesToShow: isMobile ? 0.8 : 2,
  slidesToScroll: 1,
  arrows: !isMobile,
  centerPadding: "400px",
  nextArrow: (
    <NextArrow
      onClick={() => sliderRef.current?.slickNext()}
      isVisible={currentSlide < (datalength ? datalength - (isMobile ? 1 : 2) : 0)}
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
