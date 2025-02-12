import type { ManageserviceItems } from "./Manageservice";

export interface ProductListModel {
    title: string;
    seeAllUrl: string;
    desc: string;
    productList: ManageserviceItems[];
}