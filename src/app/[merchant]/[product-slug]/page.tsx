'use client'

import React, { useEffect, useState } from 'react';

import { digitalHubRepository } from '@/data/repositories/DigitalHubRepository';
import { GetDetailproductModel } from '@/domain/models/GetDetailproduct';

import ProductImageComponent from './components/ProductImageComponent/ProductImageComponent';
import DescriptionComponent from './components/DescriptionComponent/DescriptionComponent';
import VariantComponent from './components/VariantComponent/VariantComponent';
import Image from 'next/image';
import './productSlug.scss'
import {getOriginalProductPath, getVariantIdHasSet, handleProductPath, isVariantIdInUrl, selectFirstLoad } from './components/SelectionVariantComponent/SelectionVariantComponent.config';
import { useProductStore } from '@/store/useProductStore';

const ProductSlug: React.FC = () => {

    const [product, setProduct] = useState<GetDetailproductModel>();
    const { setSelectedProduct } = useProductStore();
        
    useEffect(() => {
            const fetchDetail = async () => {
                try {
                    const items = await digitalHubRepository.GetDetailProduct('test');

                    if(!isVariantIdInUrl()) {
                        const firstSelection = selectFirstLoad(items.variants);

                        console.log(firstSelection)

                        if(firstSelection) setSelectedProduct(firstSelection?.id)

                        handleProductPath(firstSelection?.id);
                    } else {
                        const variantId = getVariantIdHasSet();
                        
                        const activateVariant  = items.variants.find(a => a.id === variantId);
                        
                        if(activateVariant) setSelectedProduct(activateVariant?.id);

                        if(activateVariant) {

                            handleProductPath(variantId);
                        } else {
                            getOriginalProductPath();

                            const firstSelection = selectFirstLoad(items.variants);

                            handleProductPath(firstSelection?.id);
                        }
                    }

                    setProduct(items);

                    
                } catch (err) {
                    console.error('Failed to fetch product', err);
                }
            };
            fetchDetail();
    }, []);

    useEffect(() => {

    }, [])

    if(!product) return (
        <>
            <div className='h-screen bg-white'></div>
        </>
    )

     if(product) return (
        <>
            <div className="detail-container">

                <div className="image-info">
                    <ProductImageComponent product={product}></ProductImageComponent>

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
                </div>

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

export default ProductSlug;