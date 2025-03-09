import type { ManageserviceItems } from "./Manageservice";

export interface GetTrandingCategoryModel {
    title: string;
    desc: string;
    productList: ManageserviceItems[];
}