
'use client'

import './category.scss';
import { use, useEffect, useState } from 'react'

import { CategoryModel } from '@/domain/models/category';
import { digitalHubRepository } from '@/data/repositories/DigitalHubRepository';
import { GetTrandingCategoryModel } from '@/domain/models/getTrandingCategory';
import Breadcrumb from '@/components/lib/breadcrumb/breadcrumb';
import CategoryComponent from '@/app/landing/components/Category/Category';
import CategoryTranding from './components/category-tranding';

 
export default function Category({
  params,
  searchParams,
}: {
  params: Promise<{ category: string }>
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>
}) {
  const { category } = use(params)
  const { query } = use(searchParams)

  const [categoryData, setCategoryData] = useState<CategoryModel[]>([]);
  const [categoryTrandingData, setCategoryTrandingData] = useState<GetTrandingCategoryModel>();
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
      fetchCategory();
      fetchCategoryTranding();
  }, [category, categoryData, categoryTrandingData]);

  const fetchCategory = async () => {
    try {
      const items = await digitalHubRepository.getCategory();
      setCategoryData(items);
    } catch (error) {
      setError("Failed to fetch category data");
    }
  };

  const fetchCategoryTranding = async () => {
    try {
      const items = await digitalHubRepository.GetTrandingCategory();
      setCategoryTrandingData(items);
    } catch {
      setError("Failed to hero banner data");
    }
  };

    const breadcrumbItems = [
        { label: 'Landing', href: '/' },
        { label: 'Digital Hub', href: '/landing' },
        { label: category, href: `/landing/${category}` }
    ];

    return (
        <div className="category-page-container">
          <div className="breadcrumb">
            <Breadcrumb items={breadcrumbItems} />
          </div>
          <section className="section-title">
            Rangkaian Layanan <br /> Digital untuk Anda
          </section>
    
          <section className='section-category'>
            <CategoryComponent categoryData={categoryData} />

            <CategoryTranding trandingList={categoryTrandingData}></CategoryTranding>
          </section>
        </div>
      );
}