'use client'

import React, { useEffect, useState } from 'react';
import './detail.scss'
import Slider from "react-slick";
import Image from 'next/image';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { GetDetailproductModel } from '@/domain/models/GetDetailproduct';
import { digitalHubRepository } from '@/data/repositories/DigitalHubRepository';
import DescriptionComponent from './components/DescriptionComponent/DescriptionComponent';
import VariantComponent from './components/VariantComponent/VariantComponent';

const Detail: React.FC = () => {

    const [product, setProduct] = useState<GetDetailproductModel>();
    const [activeIndex, setActiveIndex] = useState(0);
    
    useEffect(() => {
            const fetchDetail = async () => {
                try {
                    const items = await digitalHubRepository.GetDetailProduct('test');
                    setProduct(items);
                } catch (err) {
                    console.error('Failed to fetch product', err);
                }
            };
            fetchDetail();
    }, []);

    useEffect(() => {
        if (product?.variant_group.length) {
            console.log(product)
        }
    }, [product]);

    const settings = {
        infinite: false,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        centerMode: false,
        afterChange: (current: React.SetStateAction<number>) => setActiveIndex(current)
    };

    if(product) return (
        <>
            <div className="detail-container">

                <section className='mobile-image'>
                    <Slider {...settings}>
                        {product?.images?.map((data, index) => (
                            <div className="mobile-image-item" key={index}>
                                <Image src={data} width={1000} height={1000} alt="filter" />
                            </div>
                        ))}
                    </Slider>
                    <div className="image-count">
                        {activeIndex+1} / {product?.images.length}
                    </div>
                </section>

                <section className='product-section'>   
                        <div className="ribbon" style={{
                            color: product?.product_label_txtclr,
                            backgroundColor: product?.product_label_bg
                        }}>
                            {product?.product_label}
                        </div>

                        <div className="product-name">
                            {product?.product_name}
                        </div>

                        <div className="product-price">
                            {product?.product_price}
                        </div>

                        <div className="product-strikeout">
                            <span className='pri'>{product?.product_strikeout_price} </span>
                            <span className='str'>{product?.product_discount}%</span>
                        </div>

                        <div className="merchant">
                            <div className="merchant-image">
                                <Image src={product?.merchant_image} width={32} height={32} alt="merchantImage" />
                            </div>
                            <div className="merchant-info">
                                <div className="merchant-name">
                                    {product?.merchant_name}
                                </div>
                                <div className="merchant-location">
                                    {product?.merchant_location}
                                </div>
                            </div>
                        </div>
                </section>

                <VariantComponent 
                    variant_group={product?.variant_group} 
                    variants={product?.variants}>
                </VariantComponent>

                <DescriptionComponent 
                    title='Deskirpsi Produk' 
                    content={product?.product_desctiption}>
                </DescriptionComponent>

                <DescriptionComponent 
                    title='Deskripsi Merchant' 
                    content={product?.product_desctiption}>
                </DescriptionComponent>

            </div>
        </>
    );

};

export default Detail;