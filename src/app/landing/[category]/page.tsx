
'use client'

import './category.scss';
import { use, useEffect, useState } from 'react'

import { CategoryModel } from '@/domain/models/category';
import { digitalHubRepository } from '@/data/repositories/DigitalHubRepository';
import Breadcrumb from '@/components/lib/breadcrumb/breadcrumb';
import CategoryComponent from '@/app/landing/components/Category/Category';
 
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
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
      const fetchCategory = async () => {
        try {
          const items = await digitalHubRepository.getCategory();
          setCategoryData(items);
  
          console.log(categoryData)
        } catch (error) {
          setError("Failed to fetch category data");
        }
      };
  
      fetchCategory();
    }, [category, categoryData]);

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
          </section>
        </div>
      );
}