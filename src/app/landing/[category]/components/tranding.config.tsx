import Slider from 'react-slick';
import { NextArrow, PrevArrow } from '../../components/customArrow';
import CustomDot from '../../components/CustomDot/CustomDot';

let setSlidesToShow: number = 5;
const responsive = [
  { breakpoint: 400, settings: { slidesToShow: 1.4 } },
  { breakpoint: 500, settings: { slidesToShow: 1.7 } },
  { breakpoint: 600, settings: { slidesToShow: 2.2 } },
  { breakpoint: 700, settings: { slidesToShow: 2.3 } },
  { breakpoint: 800, settings: { slidesToShow: 2.6 } },
  { breakpoint: 900, settings: { slidesToShow: 3.1 } },
  { breakpoint: 1100, settings: { slidesToShow: 3.4 } },
  { breakpoint: 1200, settings: { slidesToShow: 3.7 } },
  { breakpoint: 1300, settings: { slidesToShow: 3.9 } },
  { breakpoint: 1400, settings: { slidesToShow: 4.4 } },
  { breakpoint: 1500, settings: { slidesToShow: 4.7 } },
];

export const TrandingSliderConfig = (
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
  slidesToShow: setSlidesToShow,
  slidesToScroll: 1,
  variableWidth: false,
  arrows: !isMobile,
  responsive: responsive,
  nextArrow: (
    <NextArrow
      onClick={() => sliderRef.current?.slickNext()}
      isVisible={currentSlide < (datalength ? datalength - setSlidesToShow : 0)}
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
  afterChange: (current: number) => {
    setCurrentSlide(current);
    updateSlidesToShow();
  },
  customPaging: (i: number) => (
    <CustomDot isActive={i === currentSlide} onClick={() => setActiveSlide(i)} />
  ),
  appendDots: (dots: React.ReactNode) => (
    <div style={{ display: "flex", justifyContent: "left" }}>{dots}</div>
  ),
});

const updateSlidesToShow = () => {
  const screenWidth = window.innerWidth;

  const activeBreakpoint = responsive
    .find((bp) => screenWidth < bp.breakpoint);

    if (activeBreakpoint) {
      setSlidesToShow = activeBreakpoint.settings.slidesToShow;
    }
};
