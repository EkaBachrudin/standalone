import { create } from "zustand";

interface ProductState {
  selectedProduct: string;
  setSelectedProduct: (product: string) => void;
}

export const useProductStore = create<ProductState>((set) => ({
  selectedProduct: 'Product A',
  setSelectedProduct: (product) => set(() => ({ selectedProduct: product })),
}));