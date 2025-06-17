import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./ProductImageComponent.scss";
import Image from 'next/image';
import { useState } from "react";
import { GetDetailproductModel } from "@/domain/models/GetDetailproduct";

interface  ProductImageComponentProps {
      product: GetDetailproductModel;
}
const ProductImageComponent: React.FC<ProductImageComponentProps> = ({product}) => {
      const [activeIndex, setActiveIndex] = useState(0);
      const mobileSettings = {
            infinite: false,
            speed: 500,
            slidesToShow: 1,
            slidesToScroll: 1,
            arrows: false,
            centerMode: false,
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
                              
                        </div>
                  </div>
            </>
      )
}

export default ProductImageComponent;