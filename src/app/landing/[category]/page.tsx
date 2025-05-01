
'use client'

import './[category].scss';
import { use, useEffect, useState } from 'react'
import { CategoryModel } from '@/domain/models/category';
import { digitalHubRepository } from '@/data/repositories/DigitalHubRepository';
import { GetTrandingCategoryModel } from '@/domain/models/getTrandingCategory';
import Breadcrumb from '@/components/lib/breadcrumb/breadcrumb';
import CategoryComponent from '@/app/landing/components/Category/Category';
import CategoryTranding from './components/category-trandling/category-tranding';
import BottomSheet from '@/components/lib/bottomsheet/BottomSheet';
import CategorySearch from './components/category-search/category-search';
import { GetProductByCategoryDto } from '@/domain/models/getProductByCategiry';
import useIsMobile from '@/hook/useIsMobile';
import { GetCategoryProductListModel } from '@/domain/models/getCategoryProductList';
import Slider from "react-slick";
import Image from 'next/image';
import { useParams, useSearchParams, useRouter } from 'next/navigation';

export default function Category() {
  const params = useParams();
  const searchParams = useSearchParams();
  const router = useRouter();
  const category = params?.category as string;
  const [categoryData, setCategoryData] = useState<CategoryModel[]>([]);
  const [categoryTrandingData, setCategoryTrandingData] = useState<GetTrandingCategoryModel>();
  const [productListByCategory, setProductListByCategory] = useState<GetCategoryProductListModel[]>();
  const [error, setError] = useState<string | null>(null);
  const isMobile = useIsMobile();
  const [isOpen, setIsOpen] = useState(false);
  

  useEffect(() => {
      fetchCategory();
      fetchCategoryTranding();
      fetchCategoryProductList();
      console.log('productListByCategory', productListByCategory)
  }, [category, categoryData, categoryTrandingData, productListByCategory]);

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
      const items = await digitalHubRepository.GetTrandingCategory(category);
      setCategoryTrandingData(items);
    } catch {
      setError("Failed to hero banner data");
    }
  };

  const fetchCategoryProductList = async (payload?: string) => {
    try {
      const items = await digitalHubRepository.GetCategoryProductList(payload);
      setProductListByCategory(items);
    } catch {
      setError("Failed to hero banner data");
    }
  };

  const breadcrumbItems = [
      { label: 'Landing', href: '/' },
      { label: 'Digital Hub', href: '/landing' },
      { label: category, href: `/landing/${category}` }
  ];

  const handleSearchData = (data: GetProductByCategoryDto) => {
      console.log(data);
      setQueryParamFilter(data);
  };

  const setQueryParamFilter = (data: GetProductByCategoryDto) =>  {
    const params = new URLSearchParams();

    Object.entries(data).forEach(([key, value]) => {
      if (Array.isArray(value)) {
        value.forEach((v) => {
          if (v) params.append(key, v);
        });
      } else if (value !== '') {
        params.set(key, value);
      }
    });

    router.push(`?${params.toString()}`, {
      scroll: false,
    });

    fetchCategoryProductList(params.toString());
  }

  var settings = {
    infinite: false,
    speed: 500,
    slidesToShow: 1.2,
    slidesToScroll: 1,
    arrows: true,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    centerMode: false
  };

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

          <section className='section-filter'>
            <div className='filter-category'>

              <div className="mobile-filter">
                <button onClick={() => setIsOpen(true)}>
                  <img src="/assets/icons/filter.svg" width={16} height={16} alt="filter" />
                  <div>Filter</div>
                </button>

                <div className="counting-product">
                  30 produck di tampilkan
                </div>
              </div>

              <div className="product-end-filter">
                <div className="dekstop-filter">
                    {!isMobile ? <CategorySearch onDataReceived={handleSearchData}/> : ''}
                </div>
                <div className="product-list">
                  {productListByCategory?.map((item, index) => (
                    <div className="product-list-items" key={index}>
                      <div className="product-list-items-image" 
                        style={{ backgroundImage: `url(${item.image})`, backgroundSize: "cover" }}>
                      </div>
                      <div className="product-list-items-content">
                        <div className="product-list-items-content-title">{item.title}</div>
                          <Slider {...settings}>
                            {item.optionLabel?.map((optionLabel, index) => (
                              <div className="product-list-items-content-optionLabel" key={index}>
                                {optionLabel.title} <span>{optionLabel.value}</span>
                              </div>
                            ))}
                          </Slider>
                        <div className="product-list-items-content-price">
                            Rp.{item.price}
                        </div>
                        <div className="product-list-items-content-pricestrikeout">
                          <span className='line-through'> Rp.{item.strikeOutPrice}</span> <span className="discount">{item.discount}%</span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

            </div>
          </section>


          <BottomSheet isOpen={isOpen} onClose={() => setIsOpen(false)}>
            <div className="mobile-filter-bottomsheet">
              <section className="head">
                <div className="title">Filter</div>
                <button onClick={() => setIsOpen(false)}>
                  <img src="/assets/icons/x.svg" width={24} height={24} alt="close" />
                </button>
              </section>

              <section className='content'>
                {isMobile ? <CategorySearch onDataReceived={handleSearchData}/> : ''}
              </section>
            </div>
          </BottomSheet>
        </div>
      );
}

const NextArrow = (props: any) => {
  const { onClick } = props;

 return (
    <div
      style={{ ...arrowStyle, right: -5, background: 'linear-gradient(270deg, #F6F3F3 66.67%, rgba(249, 249, 250, 0) 107.29%)' }}
      onClick={onClick}
    >
      <Image src="/assets/icons/chevron-right.svg" alt="Logo" width={27} height={27} />
    </div>
  );
};

const PrevArrow = (props: any) => {
  const { onClick } = props;
  if(props.currentSlide > 0) return (
    <div
      style={{ ...arrowStyle, left: -10 }}
      onClick={onClick}
    >
      <Image src="/assets/icons/chevron-left.svg" alt="Logo" width={27} height={27} />
    </div>
  );
};

const arrowStyle = {
  display: "block",
  zIndex: 2,
  position: "absolute",
  top: "53%",
  transform: "translateY(-50%)",
  cursor: "pointer",
} as any;
