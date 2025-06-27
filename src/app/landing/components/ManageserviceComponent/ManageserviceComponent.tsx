
import styles from './ManageserviceComponent.module.scss';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { ManageServiceModel } from '@/domain/models/Manageservice';
import Image from 'next/image';
import Link from 'next/link';
import FullPageLoader from '@/components/lib/fullPageLoader/fullPageLoader';

interface ManageservicePorps {
    manageServiceData?: ManageServiceModel;
}

const ManageserviceComponent: React.FC<ManageservicePorps> = ({manageServiceData}) => {


    const settings = {
        dots: false,
        infinite: false,
        speed: 500,
        slidesToShow: 5,
        centerMode: false,
        slidesToScroll: 1,
        arrows: false,
        responsive: [
            {
              breakpoint: 370,
              settings: {
                slidesToShow: 1.4,
                slidesToScroll: 1
              }
            },
            {
              breakpoint: 400,
              settings: {
                slidesToShow: 1.6,
                slidesToScroll: 1
              }
            },
            {
              breakpoint: 500,
              settings: {
                slidesToShow: 1.7,
                slidesToScroll: 1
              }
            },
            {
              breakpoint: 600,
              settings: {
                slidesToShow: 2.2,
                slidesToScroll: 1
              }
            },
            {
              breakpoint: 700,
              settings: {
                slidesToShow: 2.3,
                slidesToScroll: 1
              }
            },
            {
              breakpoint: 800,
              settings: {
                slidesToShow: 2.6,
                slidesToScroll: 1
              }
            },
            {
              breakpoint: 900,
              settings: {
                slidesToShow: 3.1,
                slidesToScroll: 1
              }
            },
            {
              breakpoint: 1100,
              settings: {
                slidesToShow: 3.4,
                slidesToScroll: 1
              }
            },
            {
              breakpoint: 1200,
              settings: {
                slidesToShow: 3.7,
                slidesToScroll: 1
              }
            },
            {
              breakpoint: 1300,
              settings: {
                slidesToShow: 3.9,
                slidesToScroll: 1
              }
            },
            {
              breakpoint: 1400,
              settings: {
                slidesToShow: 4.4,
                slidesToScroll: 1
              }
            },
            {
              breakpoint: 1500,
              settings: {
                slidesToShow: 4.7,
                slidesToScroll: 1
              }
            }
          ],
    };

    if (!manageServiceData || !manageServiceData.serviceItems.items.length) {
        return <FullPageLoader isLoading={true} />;
    }

    return (
        <>
            <div className={styles.manageServiceContainer}>
                <div className={styles.title}>
                    {manageServiceData?.title}
                </div>

                <div className={styles.top}>
                    {manageServiceData?.top.map((item) => (
                        <div key={item.name} className={styles.topItem}>
                            <div>
                                <Image src={item.icon} width={40} height={40} alt={item.name} />
                            </div>
                            <div>{item.name}</div>
                        </div>
                    ))}
                </div>

                <div className={styles.serviceItems}>
                    <div className={styles.serviceItemsGroup}>
                        <div className={styles.title}>{manageServiceData?.serviceItems.title}</div>
                        <Link href={`/landing/services`}> 
                          <div className={styles.seeAll}>Lihat Semua</div>
                        </Link>
                    </div>

                    <div className={styles.manageServiceItems}>
                        <Slider {...settings}>
                            {manageServiceData?.serviceItems.items.map((item) => (
                                <div key={item.title} className={styles.item} >
                                  
                                  <Link href={`/landing/services`}> 
                                    {/* <div className={styles.containImage} style={{ backgroundImage: `url(${item.imageUrl})`, backgroundSize: "cover" }}></div> */}
                                    <Image className={styles.containImage} src={item.imageUrl} width={500} height={500} alt={item.title} />
                                    <div className={styles.content}>
                                        <div className={styles.contentTitle}>{item.title}</div>
                                        <div className={styles.contentDesc}>{item.desc}</div>
                                    </div>
                                  </Link>
                                   
                                </div>
                            ))}
                        </Slider>
                    </div>
                </div>
            </div>
        </>
    )
}


export default ManageserviceComponent;