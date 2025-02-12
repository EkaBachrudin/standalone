import type { CategoryModel } from "./category";

export interface ManageServiceModel {
    title: string;
    top: CategoryModel[];
    serviceItems: ServiceItems;
}

export interface ServiceItems {
    title: string;
    urlSeeAll: string;
    items: ManageserviceItems[];
}

export interface ManageserviceItems {
    imageUrl: string;
    title: string;
    desc: string;
}