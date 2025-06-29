import { DigitalHubRepositoryInterface } from "@/domain/interfaces/digHubInterface";
import { CategoryModel } from "@/domain/models/category";
import { GetCategoryProductListModel } from "@/domain/models/getCategoryProductList";
import { GetDetailproductModel } from "@/domain/models/GetDetailproduct";
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
    {icon: '/assets/icons/chat.svg', name: 'Sosmed'},
    {icon: '/assets/icons/games.svg', name: 'Games'},
    {icon: '/assets/icons/music.svg', name: 'Musik'},
    {icon: '/assets/icons/move.svg', name: 'Nonton'},
    {icon: '/assets/icons/chat.svg', name: 'Sosmed'},
    {icon: '/assets/icons/games.svg', name: 'Games'},
    {icon: '/assets/icons/music.svg', name: 'Musik'}
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
        "image": "https://picsum.photos/1280/721",
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
        "image": "https://picsum.photos/1280/722",
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
        "image": "https://picsum.photos/1280/723",
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
    {
        "ribbon": {
            "label": "PROMO",
            "bg": "#FF0000",
            "color": "#FFFFFF"
        },
        "image": "https://picsum.photos/1280/720",
        "title": "Netflix Premium",
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
            "bg": "#1E90FF",
            "color": "#FFFFFF"
        },
        "image": "https://picsum.photos/1280/720",
        "title": "Vidio Platinum",
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
            "bg": "#1E90FF",
            "color": "#FFFFFF"
        },
        "image": "https://picsum.photos/1280/720",
        "title": "Vidio Platinum",
        "price": 54000,
        "strikeOutPrice": 68000,
        "discount": 20,
        "optionLabel": [
            {
                "title": "Langganan",
                "value": "7 Hari"
            }
        ]
    }
]

const getDetailProduct: GetDetailproductModel = {
    images: [
        'https://picsum.photos/1280/720',
        'https://picsum.photos/1280/781',
        'https://picsum.photos/1280/722',
        'https://picsum.photos/1280/782',
        'https://picsum.photos/1280/723',
        'https://picsum.photos/1280/724',
        'https://picsum.photos/1280/785',
        'https://picsum.photos/1280/726',
        'https://picsum.photos/1280/787',
        'https://picsum.photos/1280/728',
    ],
    product_label: 'Promo',
    product_label_bg: '#FDA22B',
    product_label_txtclr: '#001A41',
    product_name: 'Vidio Platinum',
    product_price: 'Rp54.000',
    product_strikeout_price: 'Rp 330.000',
    product_discount: '10',
    product_desctiption:
        '<p><strong>Paket Vidio dengan:</strong></p><ul><li><strong>Langganan Basic Vidio 1 bulan</strong></li><li>Langganan Basic Vidio dapat membuat profil dalam 1 akun hingga <strong>7 profile</strong>,<strong>1 concurrent stream</strong> (1 stream secara bersamaan), maksimum login di<strong>3 perangkat</strong>, dan kualitas video hingga <strong>Full HD (1080p)</strong></li></ul><p>Nikmati semua tayangan <strong>Global dan Lokal terbaik</strong> di aplikasi Vidio</p><p><strong>Paket Vidio dengan:</strong></p><ul><li><strong>Langganan Basic Vidio 1 bulan</strong></li><li>Langganan Basic Vidio dapat membuat profil dalam 1 akun hingga <strong>7 profile</strong>,<strong>1 concurrent stream</strong> (1 stream secara bersamaan), maksimum login di<strong>3 perangkat</strong>, dan kualitas video hingga <strong>Full HD (1080p)</strong></li></ul><p>Nikmati semua tayangan <strong>Global dan Lokal terbaik</strong> di aplikasi Vidio</p>',
    product_tnc: '-',
    merchant_image: 'https://picsum.photos/1280/726',
    merchant_name: 'Vidio',
    merchant_location: 'Jakarta Selatan',
    variant_group: [
        {
            name: 'Jenis Paket',
            key: 'jenisPaket',
            options: [
                { id: 'platinum', label: 'Platinum' },
                { id: 'diamond', label: 'Diamond' },
                { id: 'fifa_u17', label: 'FIFA U-17' },
            ],
        },
        {
            name: 'Masa Aktif',
            key: 'masaAktif',
            options: [
                { id: '7hari', label: '7 Hari' },
                { id: '30hari', label: '30 Hari' },
                { id: '90hari', label: '90 Hari' },
                { id: '1tahun', label: '1 Tahun' },
            ],
        },
         {
            name: 'Perangkat',
            key: 'perangkat',
            options: [
                { id: 'semua', label: 'Semua Perangkat' },
                { id: 'mobile', label: 'Mobile' },
            ],
        }
    ],
    variants: [
        {
            id: 'v1',
            image: 'https://picsum.photos/1280/726',
            variantValues: {
                jenisPaket: 'platinum',
                perangkat: 'semua',
                masaAktif: '7hari',
            },
            price: 54000,
            originalPrice: 60000,
            discountPercentage: 10,
            available: true,
        },
        {
            id: 'v2',
            image: 'https://picsum.photos/1280/726',
            variantValues: {
                jenisPaket: 'platinum',
                perangkat: 'semua',
                masaAktif: '30hari',
            },
            price: 108000,
            originalPrice: 120000,
            discountPercentage: 10,
            available: false,
        },
        {
            id: 'v3',
            image: 'https://picsum.photos/1280/726',
            variantValues: {
                jenisPaket: 'platinum',
                perangkat: 'semua',
                masaAktif: '90hari',
            },
            price: 162000,
            originalPrice: 180000,
            discountPercentage: 10,
            available: true,
        },
        {
            id: 'v4',
            image: 'https://picsum.photos/1280/726',
            variantValues: {
                jenisPaket: 'platinum',
                perangkat: 'semua',
                masaAktif: '1tahun',
            },
            price: 216000,
            originalPrice: 240000,
            discountPercentage: 10,
            available: true,
        },
        {
            id: 'v5',
            image: 'https://picsum.photos/1280/726',
            variantValues: {
                jenisPaket: 'platinum',
                perangkat: 'mobile',
                masaAktif: '7hari',
            },
            price: 49000,
            originalPrice: 55000,
            discountPercentage: 11,
            available: false,
        },
        {
            id: 'v6',
            image: 'https://picsum.photos/1280/726',
            variantValues: {
                jenisPaket: 'platinum',
                perangkat: 'mobile',
                masaAktif: '30hari',
            },
            price: 98000,
            originalPrice: 110000,
            discountPercentage: 11,
            available: true,
        },
        {
            id: 'v7',
            image: 'https://picsum.photos/1280/726',
            variantValues: {
                jenisPaket: 'platinum',
                perangkat: 'mobile',
                masaAktif: '90hari',
            },
            price: 147000,
            originalPrice: 165000,
            discountPercentage: 11,
            available: true,
        },
        {
            id: 'v8',
            image: 'https://picsum.photos/1280/726',
            variantValues: {
                jenisPaket: 'platinum',
                perangkat: 'mobile',
                masaAktif: '1tahun',
            },
            price: 196000,
            originalPrice: 220000,
            discountPercentage: 11,
            available: true,
        },
        {
            id: 'v9',
            image: 'https://picsum.photos/1280/726',
            variantValues: {
                jenisPaket: 'diamond',
                perangkat: 'semua',
                masaAktif: '7hari',
            },
            price: 64000,
            originalPrice: 70000,
            discountPercentage: 9,
            available: true,
        },
        {
            id: 'v10',
            image: 'https://picsum.photos/1280/726',
            variantValues: {
                jenisPaket: 'diamond',
                perangkat: 'semua',
                masaAktif: '30hari',
            },
            price: 128000,
            originalPrice: 140000,
            discountPercentage: 9,
            available: true,
        },
        {
            id: 'v11',
            image: 'https://picsum.photos/1280/726',
            variantValues: {
                jenisPaket: 'diamond',
                perangkat: 'semua',
                masaAktif: '90hari',
            },
            price: 192000,
            originalPrice: 210000,
            discountPercentage: 9,
            available: true,
        },
        {
            id: 'v12',
            image: 'https://picsum.photos/1280/726',
            variantValues: {
                jenisPaket: 'diamond',
                perangkat: 'semua',
                masaAktif: '1tahun',
            },
            price: 256000,
            originalPrice: 280000,
            discountPercentage: 9,
            available: true,
        },
        {
            id: 'v13',
            image: 'https://picsum.photos/1280/726',
            variantValues: {
                jenisPaket: 'diamond',
                perangkat: 'mobile',
                masaAktif: '7hari',
            },
            price: 59000,
            originalPrice: 65000,
            discountPercentage: 9,
            available: false,
        },
        {
            id: 'v14',
            image: 'https://picsum.photos/1280/726',
            variantValues: {
                jenisPaket: 'diamond',
                perangkat: 'mobile',
                masaAktif: '30hari',
            },
            price: 118000,
            originalPrice: 130000,
            discountPercentage: 9,
            available: true,
        },
        {
            id: 'v15',
            image: 'https://picsum.photos/1280/726',
            variantValues: {
                jenisPaket: 'diamond',
                perangkat: 'mobile',
                masaAktif: '90hari',
            },
            price: 177000,
            originalPrice: 195000,
            discountPercentage: 9,
            available: true,
        },
        {
            id: 'v16',
            image: 'https://picsum.photos/1280/726',
            variantValues: {
                jenisPaket: 'diamond',
                perangkat: 'mobile',
                masaAktif: '1tahun',
            },
            price: 236000,
            originalPrice: 260000,
            discountPercentage: 9,
            available: true,
        },
        {
            id: 'v17',
            image: 'https://picsum.photos/1280/726',
            variantValues: {
                jenisPaket: 'fifa_u17',
                perangkat: 'semua',
                masaAktif: '7hari',
            },
            price: 49000,
            originalPrice: 55000,
            discountPercentage: 11,
            available: true,
        },
        {
            id: 'v18',
            image: 'https://picsum.photos/1280/726',
            variantValues: {
                jenisPaket: 'fifa_u17',
                perangkat: 'semua',
                masaAktif: '30hari',
            },
            price: 98000,
            originalPrice: 110000,
            discountPercentage: 11,
            available: true,
        },
        {
            id: 'v19',
            image: 'https://picsum.photos/1280/726',
            variantValues: {
                jenisPaket: 'fifa_u17',
                perangkat: 'semua',
                masaAktif: '90hari',
            },
            price: 147000,
            originalPrice: 165000,
            discountPercentage: 11,
            available: true,
        },
        {
            id: 'v20',
            image: 'https://picsum.photos/1280/726',
            variantValues: {
                jenisPaket: 'fifa_u17',
                perangkat: 'semua',
                masaAktif: '1tahun',
            },
            price: 196000,
            originalPrice: 220000,
            discountPercentage: 11,
            available: true,
        },
        {
            id: 'v21',
            image: 'https://picsum.photos/1280/726',
            variantValues: {
                jenisPaket: 'fifa_u17',
                perangkat: 'mobile',
                masaAktif: '7hari',
            },
            price: 45000,
            originalPrice: 50000,
            discountPercentage: 10,
            available: true,
        },
        {
            id: 'v22',
            image: 'https://picsum.photos/1280/726',
            variantValues: {
                jenisPaket: 'fifa_u17',
                perangkat: 'mobile',
                masaAktif: '30hari',
            },
            price: 90000,
            originalPrice: 100000,
            discountPercentage: 10,
            available: true,
        },
        {
            id: 'v23',
            image: 'https://picsum.photos/1280/726',
            variantValues: {
                jenisPaket: 'fifa_u17',
                perangkat: 'mobile',
                masaAktif: '90hari',
            },
            price: 135000,
            originalPrice: 150000,
            discountPercentage: 10,
            available: true,
        },
        {
            id: 'v24',
            image: 'https://picsum.photos/1280/726',
            variantValues: {
                jenisPaket: 'fifa_u17',
                perangkat: 'mobile',
                masaAktif: '1tahun',
            },
            price: 180000,
            originalPrice: 200000,
            discountPercentage: 10,
            available: true,
        },
    ]
}




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
    async GetDetailProduct(): Promise<GetDetailproductModel> {
        return getDetailProduct;
    }
}