import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./ProductImageComponent.scss";
import Image from 'next/image';
import { useRef, useState } from "react";
import { GetDetailproductModel } from "@/domain/models/GetDetailproduct";
import { NextArrow, PrevArrow } from "@/app/landing/components/CustomArrowComponent/customArrowComponent";

interface  ProductImageComponentProps {
      product: GetDetailproductModel;
}
const ProductImageComponent: React.FC<ProductImageComponentProps> = ({product}) => {
      const [activeIndex, setActiveIndex] = useState(0);
      const sliderRef = useRef<Slider>(null);
      const mobileSettings = {
            infinite: false,
            speed: 500,
            slidesToShow: 1,
            slidesToScroll: 1,
            arrows: false,
            centerMode: false,
            afterChange: (current: React.SetStateAction<number>) => setActiveIndex(current)
      };

      const dekstopSettings = {
            infinite: false,
            speed: 500,
            slidesToShow: 4,
            slidesToScroll: 1,
            arrows: true,
            centerMode: false,
            nextArrow: (
                <NextArrow
                  onClick={() => {}}
                  isVisible={activeIndex !== (product?.images.length - 4)}
                  extraStyle={{ position: "absolute", left: "345px", top: "30%" }}
                />
              ),
            prevArrow: (
                <PrevArrow
                  onClick={() => {}}
                  isVisible={activeIndex !== 0}
                  extraStyle={{ position: "absolute", right: "360px", zIndex: "100", top: "31%" }}
                />
            ),
            afterChange: (current: React.SetStateAction<number>) => setActiveIndex(current)
      };

      return (
            <>
                  <div className="productImageComponent">
                        <section className='mobile-image'>
                              <Slider {...mobileSettings}>
                                    {product?.images?.map((data, index) => (
                                    <div className="mobile-image-item" key={index}>
                                          <Image src={data} width={1000} height={1000} alt="filter" priority={true} />
                                    </div>
                                    ))}
                              </Slider>
                              <div className="image-count">
                                    {activeIndex+1} / {product?.images.length}
                              </div>
                        </section>

                        <div className="dekstop-image">
                              <Image src={product?.images[0]} className="main" width={375} height={375} alt="filter" priority={true} draggable={false} />

                              <Slider {...dekstopSettings} className="img-slide">
                                    {product?.images?.map((data, index) => (
                                    <div className="dekstop-image-item" key={index}>
                                          <Image src={data} width={80} height={80} alt="filter" priority={false} />
                                    </div>
                                    ))}
                              </Slider>
                        </div>
                  </div>
            </>
      )
}

export default ProductImageComponent;