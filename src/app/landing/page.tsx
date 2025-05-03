'use client'

import React, { useEffect, useState } from 'react';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import HeroBanner from './components/HeroBannerComponent/HeroBannerComponent';
import CategoryComponent from './components/CategoryComponent/CategoryComponent';
import Manageservice from './components/ManageserviceComponent/ManageserviceComponent';
import ProductList from './components/ProductListComponent/ProductListComponent';
import './landing.scss';
import { HeroBannerModel } from '@/domain/models/heroBanner';
import { CategoryModel } from '@/domain/models/category';
import { ManageServiceModel } from '@/domain/models/Manageservice';
import { ProductListModel } from '@/domain/models/productList';
import { digitalHubRepository } from '@/data/repositories/DigitalHubRepository';

const Landing: React.FC = () => {
    const [error, setError] = useState<string | null>(null);
    const [bannerData, setBannerData] = useState<HeroBannerModel>();
    const [categoryData, setCategoryData] = useState<CategoryModel[]>([]);
    const [manageService, setManageService] = useState<ManageServiceModel>();
    const [productList, setProductList] = useState<ProductListModel>();

    const fetchMenuItems = async () => {
        try {
          const items = await digitalHubRepository.getHeroBanner();
          setBannerData(items);
          fetchCategory();
          fetchManageService();
          fetchProductList();
        } catch {
          setError("Failed to hero banner data");
        }
    };

    const fetchCategory = async () => {
        try {
          const items = await digitalHubRepository.getCategory();
          setCategoryData(items);
        } catch {
          setError("Failed to hero banner data");
        }
    };

    const fetchManageService = async () => {
      try {
        const items = await digitalHubRepository.getManageService();
        setManageService(items);
      } catch {
        setError("Failed to hero banner data");
      }
    };

    const fetchProductList = async () => {
      try {
        const items = await digitalHubRepository.getProductList();
        setProductList(items);
      } catch {
        setError("Failed to hero banner data");
      }
    };

    useEffect(() => {
        fetchMenuItems();
    });

    if (error) {
        return <div>{error}</div>;
    }

  return (
    <>
      <div className='landing-container'>
        <HeroBanner bannerDataProps={bannerData} />
        <section className='section-category'>
          <CategoryComponent categoryData={categoryData} />
        </section>
        <Manageservice manageServiceData={manageService} />
        <ProductList productListData={productList} />
      </div>
    </>
  );
};

export default Landing;