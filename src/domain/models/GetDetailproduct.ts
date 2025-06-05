export interface GetDetailproductModel {
      images: string[];
      product_label: string;
      product_label_bg: string;
      product_label_txtclr: string;
      product_name: string;
      product_price: string;
      product_strikeout_price: string;
      product_discount: string;
      product_desctiption: string;
      product_tnc: string;
      merchant_image: string;
      merchant_name: string;
      merchant_location: string;
      variant_group: VariantGroup[];
      variants: ProductVariant[];
}

export type VariantGroup = {
  name: string;
  key: string; 
  options: VariantOption[];
};

export type VariantOption = {
  id: string;
  label: string;
  isActive?: boolean;
};

export type ProductVariant = {
  id: string;
  image: string;
  variantValues: Record<string, string>;
  price: number;
  originalPrice?: number;
  discountPercentage?: number;
  available: boolean
};