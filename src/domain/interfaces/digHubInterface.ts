import { CategoryModel } from "../models/category";
import { GetCategoryProductListModel } from "../models/getCategoryProductList";
import { GetMerchantDataModel } from "../models/getMerchant.model";
import { GetTrandingCategoryModel } from "../models/getTrandingCategory";
import { HeroBannerModel } from "../models/heroBanner";
import { ManageServiceModel } from "../models/Manageservice";
import { ProductListModel } from "../models/productList";


export interface DigitalHubRepositoryInterface {
    getHeroBanner(): Promise<HeroBannerModel>;
    getCategory(): Promise<CategoryModel[]>;
    getManageService(): Promise<ManageServiceModel>;
    getProductList(): Promise<ProductListModel>;
    GetTrandingCategory(param: string): Promise<GetTrandingCategoryModel>;
    GetMerchant(): Promise<GetMerchantDataModel[]>;
    GetCategoryProductList() : Promise<GetCategoryProductListModel[]>
}