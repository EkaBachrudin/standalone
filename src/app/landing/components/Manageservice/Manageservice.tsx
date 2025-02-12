
import styles from './Manageservice.module.scss';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { ManageServiceModel } from '@/domain/models/Manageservice';

interface ManageservicePorps {
    manageServiceData?: ManageServiceModel;
}

const Manageservice: React.FC<ManageservicePorps> = ({manageServiceData}) => {


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
              breakpoint: 500,
              settings: {
                slidesToShow: 1.6,
                slidesToScroll: 1
              }
            },
            {
                breakpoint: 800,
                settings: {
                  slidesToShow: 2.4,
                  slidesToScroll: 1
                }
            },
            {
                breakpoint: 1024,
                settings: {
                  slidesToShow: 3.4,
                  slidesToScroll: 1
                }
            },
            {
                breakpoint: 1203,
                settings: {
                  slidesToShow: 4.4,
                  slidesToScroll: 1
                }
            },
            {
                breakpoint: 1338,
                settings: {
                  slidesToShow: 4.5,
                  slidesToScroll: 1
                }
            }
          ]
    };

    if (!manageServiceData || !manageServiceData.serviceItems.items.length) {
        return <div>Loading...</div>;
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
                            {/* <div><item.icon className='w-6 lg:w-10' /></div> */}
                            <div>{item.name}</div>
                        </div>
                    ))}
                </div>

                <div className={styles.serviceItems}>
                    <div className={styles.serviceItemsGroup}>
                        <div className={styles.title}>{manageServiceData?.serviceItems.title}</div>
                        <div className={styles.seeAll}>Lihat Semua</div>
                    </div>

                    <div className={styles.manageServiceItems}>
                        <Slider {...settings}>
                            {manageServiceData?.serviceItems.items.map((item) => (
                                <div key={item.title} className={styles.item} >
                                    <div className={styles.containImage} style={{ backgroundImage: `url(${item.imageUrl})`, backgroundSize: "cover" }}></div>
                                    <div className={styles.content}>
                                        <div className={styles.contentTitle}>{item.title}</div>
                                        <div className={styles.contentDesc}>{item.desc}</div>
                                    </div>
                                </div>
                            ))}
                        </Slider>
                    </div>
                </div>
            </div>
        </>
    )
}


export default Manageservice;