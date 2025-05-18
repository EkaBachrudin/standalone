import { CategoryModel } from "../models/category";
import { GetCategoryProductListModel } from "../models/getCategoryProductList";
import { GetDetailproductModel } from "../models/GetDetailproduct";
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
    GetCategoryProductList(payload?: string) : Promise<GetCategoryProductListModel[]>
    GetDetailProduct(productId: string): Promise<GetDetailproductModel>;
}