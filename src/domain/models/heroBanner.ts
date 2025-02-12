export interface HeroBannerModel {
    title: string;
    desc: string;
    items: HeroBannerItems[]
}

export interface HeroBannerItems {
    title: string;
    desc: string;
    pageUrl: string;
    imageUrl: string;
}