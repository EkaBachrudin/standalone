'use client'

import React from 'react';
import './detail.scss'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Detail: React.FC = () => {

    const settings = {
    infinite: false,
    speed: 500,
    slidesToShow: 1.2,
    slidesToScroll: 1,
    arrows: true,
    centerMode: false
  };

    const data = [
        'ITEM1',
         'ITEM1',
          'ITEM1'
    ]

    return (
        <>
            <div className="detail-container">

                <section className='mobile-image'>
                    <Slider {...settings}>
                        {data?.map((data, index) => (
                            <div className="mobile-image-item" key={index}>
                                {data}
                            </div>
                        ))}
                    </Slider>
                </section>

            </div>
        </>
    );

};

export default Detail;