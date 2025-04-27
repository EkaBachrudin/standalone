import { DigitalHubRepositoryInterface } from "@/domain/interfaces/digHubInterface";
import { CategoryModel } from "@/domain/models/category";
import { GetCategoryProductListModel } from "@/domain/models/getCategoryProductList";
import { GetMerchantDataModel } from "@/domain/models/getMerchant.model";
import { GetTrandingCategoryModel } from "@/domain/models/getTrandingCategory";
import { HeroBannerModel } from "@/domain/models/heroBanner";
import { ManageServiceModel } from "@/domain/models/Manageservice";
import { ProductListModel } from "@/domain/models/productList";

const heroBannerData: HeroBannerModel = {
    title: 'Telkomsel Digital Hub',
    desc: 'Beli, atur dan nikmati beragam produk langganan di Telkomsel',
    items: [
        {
            title: 'Netflix',
            desc: 'Jangan lewatkan Dian Sastro di serial Gadis Kretek, mulai dari Rp54.000/bulan',
            imageUrl: 'https://picsum.photos/1920/1080',
            pageUrl: '/doc'
        },
        {
            title: 'Google Play Pass',
            desc: 'Push rank makin gampang, mulai dari Rp54.000/bulan',
            imageUrl: 'https://picsum.photos/1280/720',
            pageUrl: '/doc'
        },
        {
            title: 'Netflix',
            desc: 'Jangan lewatkan Dian Sastro di serial Gadis Kretek, mulai dari Rp54.000/bulan',
            imageUrl: 'https://picsum.photos/1920/1081',
            pageUrl: '/doc'
        },
        {
            title: 'Google Play Pass',
            desc: 'Push rank makin gampang, mulai dari Rp54.000/bulan',
            imageUrl: 'https://picsum.photos/1280/721',
            pageUrl: '/doc'
        }
    ]
}

const categoryData: CategoryModel[] = [
    {icon: '/assets/icons/move.svg', name: 'Nonton'},
    {icon: '/assets/icons/move.svg', name: 'Sosmed'},
    {icon: '/assets/icons/move.svg', name: 'Games'},
    {icon: '/assets/icons/move.svg', name: 'Musik'},
    {icon: '/assets/icons/move.svg', name: 'Nonton'},
    {icon: '/assets/icons/move.svg', name: 'Sosmed'},
    {icon: '/assets/icons/move.svg', name: 'Games'},
    {icon: '/assets/icons/move.svg', name: 'Musik'}
]

const manageServiceData: ManageServiceModel = {
    title: 'Kelola Layanan Digital',
    top: [
        {icon: '/assets/icons/move.svg', name: 'Aktifkan Paket'},
        {icon: '/assets/icons/move.svg', name: 'Pusat Bantuan'},
    ],
    serviceItems: {
        title: 'Jelajahi Layanan',
        urlSeeAll: '/doc',
        items: [
            {
                imageUrl: 'https://picsum.photos/1920/1089',
                title: 'Kuncie',
                desc: 'Langganan mulai dari Rp54.000/bulan'
            },
            {
                imageUrl: 'https://picsum.photos/1920/1081',
                title: 'Vidoe',
                desc: 'Langganan mulai dari Rp54.000/bulan'
            },
            {
                imageUrl: 'https://picsum.photos/1920/1082',
                title: 'Kuncie',
                desc: 'Langganan mulai dari Rp54.000/bulan'
            },
            {
                imageUrl: 'https://picsum.photos/1920/1083',
                title: 'Vidoe',
                desc: 'Langganan mulai dari Rp54.000/bulan'
            },
            {
                imageUrl: 'https://picsum.photos/1920/1086',
                title: 'Vidoe',
                desc: 'Langganan mulai dari Rp54.000/bulan'
            },
            {
                imageUrl: 'https://picsum.photos/1920/1083',
                title: 'Vidoe',
                desc: 'Langganan mulai dari Rp54.000/bulan'
            },
            {
                imageUrl: 'https://picsum.photos/1920/1086',
                title: 'Vidoe',
                desc: 'Langganan mulai dari Rp54.000/bulan'
            },
        ]
    }
}

const productDetailData: ProductListModel = {
    title: 'Pilihan Telkomsel',
    seeAllUrl: '/doc',
    desc: 'Produk-produk unggulan Telkomsel yang cocok untuk Anda',
    productList: [
        {
            imageUrl: 'https://picsum.photos/1280/720',
            title: 'Tonton film karya anak muda Indonesia di MAXstream',
            desc: 'Langganan mulai dari Rp54.000/bulan'
        },
        {
            imageUrl: 'https://picsum.photos/1280/721',
            title: 'Kembangkan karir dengan belajar standar internasional',
            desc: 'Langganan mulai dari Rp54.000/bulan'
        },
        {
            imageUrl: 'https://picsum.photos/1280/722',
            title: 'Tonton film karya anak muda Indonesia di MAXstream',
            desc: 'Langganan mulai dari Rp54.000/bulan'
        },
        {
            imageUrl: 'https://picsum.photos/1280/723',
            title: 'Kembangkan karir dengan belajar standar internasional',
            desc: 'Langganan mulai dari Rp54.000/bulan'
        },
        {
            imageUrl: 'https://picsum.photos/1280/724',
            title: 'Tonton film karya anak muda Indonesia di MAXstream',
            desc: 'Langganan mulai dari Rp54.000/bulan'
        },
        {
            imageUrl: 'https://picsum.photos/1280/720',
            title: 'Tonton film karya anak muda Indonesia di MAXstream',
            desc: 'Langganan mulai dari Rp54.000/bulan'
        },
        {
            imageUrl: 'https://picsum.photos/1280/721',
            title: 'Kembangkan karir dengan belajar standar internasional',
            desc: 'Langganan mulai dari Rp54.000/bulan'
        },
    ]
}

const trandingCategoryMock: GetTrandingCategoryModel = {
    title: 'Kumpulan Film yang lagi Trending!',
    desc: 'Yuk berlangganan dengan Telkomsel dan jangan lewatkan film-film trending berikut',
    productList: [
        {
            imageUrl: 'https://picsum.photos/1280/720',
            title: 'Pertaruhan',
            desc: 'Tayang di Vidio'
        },
        {
            imageUrl: 'https://picsum.photos/1280/721',
            title: 'Upon Entry',
            desc: 'Tayang di Klik Film'
        },
        {
            imageUrl: 'https://picsum.photos/1280/722',
            title: 'Believer',
            desc: 'Tayang di Netflix'
        },
        {
            imageUrl: 'https://picsum.photos/1280/723',
            title: 'Wedding Aggreement 2',
            desc: 'Tayang di Disney+ Hotstar'
        },
        {
            imageUrl: 'https://picsum.photos/1280/720',
            title: 'Pertaruhan',
            desc: 'Tayang di Vidio'
        },
        {
            imageUrl: 'https://picsum.photos/1280/721',
            title: 'Upon Entry',
            desc: 'Tayang di Klik Film'
        },
        {
            imageUrl: 'https://picsum.photos/1280/722',
            title: 'Believer',
            desc: 'Tayang di Netflix'
        },
        {
            imageUrl: 'https://picsum.photos/1280/723',
            title: 'Wedding Aggreement 2',
            desc: 'Tayang di Disney+ Hotstar'
        }
    ]
}

const getMerchantDataMock: GetMerchantDataModel[] = [
    { "id": "maxstream", "name": "MAXStream" },
    { "id": "vidio", "name": "Vidio" },
    { "id": "netflix", "name": "Netflix" },
    { "id": "disney_hotstar", "name": "Disney+ Hotstar" },
    { "id": "prime_video", "name": "Prime Video" },
    { "id": "prabayar", "name": "Prabayar" },
    { "id": "halo", "name": "Halo" }
  ]

const GetCategoryProductList: GetCategoryProductListModel[] = [
    {
        "ribbon": {
            "label": "PROMO",
            "bg": "#FF0000",
            "color": "#FFFFFF"
        },
        "image": "https://picsum.photos/1280/720",
        "title": "MAXStream",
        "price": 54000,
        "strikeOutPrice": 68000,
        "discount": 20,
        "optionLabel": [
            {
                "title": "Langganan",
                "value": "7 Hari"
            },
            {
                "title": "Langganan",
                "value": "7 Hari"
            }
        ]
    },
    {
        "ribbon": {
            "label": "PROMO",
            "bg": "#FF0000",
            "color": "#FFFFFF"
        },
        "image": "https://picsum.photos/1280/720",
        "title": "Netflix Mobile",
        "price": 54000,
        "strikeOutPrice": 68000,
        "discount": 20,
        "optionLabel": [
            {
                "title": "Langganan",
                "value": "7 Hari"
            }
        ]
    },
    {
        "ribbon": {
            "label": "PROMO",
            "bg": "#FF0000",
            "color": "#FFFFFF"
        },
        "image": "https://picsum.photos/1280/720",
        "title": "Netflix Basic",
        "price": 54000,
        "strikeOutPrice": 68000,
        "discount": 20,
        "optionLabel": [
            {
                "title": "Langganan",
                "value": "7 Hari"
            }
        ]
    },
    {
        "ribbon": {
            "label": "PROMO",
            "bg": "#FF0000",
            "color": "#FFFFFF"
        },
        "image": "https://picsum.photos/1280/720",
        "title": "Netflix Standard",
        "price": 54000,
        "strikeOutPrice": 68000,
        "discount": 20,
        "optionLabel": [
            {
                "title": "Langganan",
                "value": "7 Hari"
            }
        ]
    },
    // {
    //     "ribbon": {
    //         "label": "PROMO",
    //         "bg": "#FF0000",
    //         "color": "#FFFFFF"
    //     },
    //     "image": "https://picsum.photos/1280/720",
    //     "title": "Netflix Premium",
    //     "price": 54000,
    //     "strikeOutPrice": 68000,
    //     "discount": 20,
    //     "optionLabel": [
    //         {
    //             "title": "Langganan",
    //             "value": "7 Hari"
    //         }
    //     ]
    // },
    // {
    //     "ribbon": {
    //         "label": "PROMO",
    //         "bg": "#1E90FF",
    //         "color": "#FFFFFF"
    //     },
    //     "image": "https://picsum.photos/1280/720",
    //     "title": "Vidio Platinum",
    //     "price": 54000,
    //     "strikeOutPrice": 68000,
    //     "discount": 20,
    //     "optionLabel": [
    //         {
    //             "title": "Langganan",
    //             "value": "7 Hari"
    //         }
    //     ]
    // },
    // {
    //     "ribbon": {
    //         "label": "PROMO",
    //         "bg": "#1E90FF",
    //         "color": "#FFFFFF"
    //     },
    //     "image": "https://picsum.photos/1280/720",
    //     "title": "Vidio Platinum",
    //     "price": 54000,
    //     "strikeOutPrice": 68000,
    //     "discount": 20,
    //     "optionLabel": [
    //         {
    //             "title": "Langganan",
    //             "value": "7 Hari"
    //         }
    //     ]
    // }
]


export class HeroBannerMock implements DigitalHubRepositoryInterface {
    async getCategory(): Promise<CategoryModel[]> {
        return categoryData;
    }
    async getHeroBanner(): Promise<HeroBannerModel> {
        return heroBannerData;
    }
    async getManageService(): Promise<ManageServiceModel> {
        return manageServiceData;
    }
    async getProductList(): Promise<ProductListModel> {
        return productDetailData;
    }
    async GetTrandingCategory(): Promise<GetTrandingCategoryModel> {
        return trandingCategoryMock;
    }

    async GetMerchant(): Promise<GetMerchantDataModel[]> {
        return getMerchantDataMock;
    }
    async GetCategoryProductList(): Promise<GetCategoryProductListModel[]> {
        return GetCategoryProductList;
    }
}