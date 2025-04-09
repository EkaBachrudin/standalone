export interface GetCategoryProductListModel{
    ribbon: Ribbon;
    image: string;
    title: string;
    price: number;
    strikeOutPrice: number;
    discount: number;
    optionLabel: OptionLabel[];
}

export interface Ribbon {
    label: string;
    bg: string;
    color: string; 
}

export interface OptionLabel {
    title: string;
    value: string
}