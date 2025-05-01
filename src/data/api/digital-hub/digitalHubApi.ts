import { DigitalHubRepositoryInterface } from "@/domain/interfaces/digHubInterface";
import { CategoryModel } from "@/domain/models/category";
import type { GetCategoryProductListModel } from "@/domain/models/getCategoryProductList";
import { GetMerchantDataModel } from "@/domain/models/getMerchant.model";
import { GetProductByCategoryDto } from "@/domain/models/getProductByCategiry";
import { GetTrandingCategoryModel } from "@/domain/models/getTrandingCategory";
import { HeroBannerModel } from "@/domain/models/heroBanner";
import { ManageServiceModel } from "@/domain/models/Manageservice";
import { ProductListModel } from "@/domain/models/productList";


export class HeroBannerApi implements DigitalHubRepositoryInterface {
    async getHeroBanner(): Promise<HeroBannerModel> {
        const response = await fetch('https://api.example.com/getHeroBanner');
        
        if (!response.ok) {
            throw new Error("Failed to fetch menu items");
        }

        const data = await response.json();
        return data;
    }

    async getCategory(): Promise<CategoryModel[]> {
        const response = await fetch('https://api.example.com/getCategory');
        
        if (!response.ok) {
            throw new Error("Failed to fetch caregory data");
        }

        const data = await response.json();
        return data;
    }

    async getManageService(): Promise<ManageServiceModel> {
        const response = await fetch('https://api.example.com/manageService');
        
        if (!response.ok) {
            throw new Error("Failed to fetch caregory data");
        }

        const data = await response.json();
        return data;
    }

    async getProductList(): Promise<ProductListModel> {
        const response = await fetch('https://api.example.com/productList');
        
        if (!response.ok) {
            throw new Error("Failed to fetch product list");
        }

        const data = await response.json();
        return data;
    }

    async GetTrandingCategory(param: string): Promise<GetTrandingCategoryModel> {
        const response = await fetch(`https://api.example.com/category/tranding/${param}`);
        
        if (!response.ok) {
            throw new Error("Failed to fetch product list");
        }

        const data = await response.json();
        return data;
    }

    async GetMerchant(): Promise<GetMerchantDataModel[]> {
        const response = await fetch(`https://api.example.com/v1/merchant`);
        
        if (!response.ok) {
            throw new Error("Failed to fetch product list");
        }

        const data = await response.json();
        return data;
    }

    async GetCategoryProductList(payload: string): Promise<GetCategoryProductListModel[]> {
        console.log('GetCategoryProductList', payload)
        const response = await fetch(`https://api.example.com/v1/category-merchant`);
        
        if (!response.ok) {
            throw new Error("Failed to fetch category priduct list");
        }

        const data = await response.json();
        return data;
    }

}