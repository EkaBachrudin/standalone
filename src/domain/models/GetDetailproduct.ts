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
};

export type ProductVariant = {
  id: string;
  variantValues: Record<string, string>;
  price: number;
  originalPrice?: number;
  discountPercentage?: number;
};

const data = {
  "variantGroups": [
    {
      "name": "Jenis Paket",
      "key": "jenisPaket",
      "options": [
        { "id": "platinum", "label": "Platinum" },
        { "id": "diamond", "label": "Diamond" },
        { "id": "fifa_u17", "label": "FIFA U-17" }
      ]
    },
    {
      "name": "Perangkat",
      "key": "perangkat",
      "options": [
        { "id": "semua", "label": "Semua Perangkat" },
        { "id": "mobile", "label": "Mobile" }
      ]
    },
    {
      "name": "Masa Aktif",
      "key": "masaAktif",
      "options": [
        { "id": "7hari", "label": "7 Hari" },
        { "id": "30hari", "label": "30 Hari" },
        { "id": "90hari", "label": "90 Hari" },
        { "id": "1tahun", "label": "1 Tahun" }
      ]
    }
  ],
  "variants": [
    {
      "id": "v1",
      "variantValues": {
        "jenisPaket": "platinum",
        "perangkat": "semua",
        "masaAktif": "7hari"
      },
      "price": 54000,
      "originalPrice": 60000,
      "discountPercentage": 10
    }
  ]
}