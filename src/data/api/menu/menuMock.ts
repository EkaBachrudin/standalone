import { MenuRepositoryInterface } from "../../../domain/interfaces/menuRepositoryInterface";
import { MenuItem } from "../../../domain/models/menuItem";


const mockMenuItems: MenuItem[] = [
  { name: "Internet" },
  { name: "Produk" },
  { name: "Layanan Digital" },
  { name: "Jelajah", 
    childs: [
      {childName: 'Pusat Bantuan', url: ''},
      {childName: 'Pelanggan Bantuan', url: ''}
    ]
   },
  { 
    name: "Bantuan",
    childs: [
      {childName: 'Pusat Bantuan', url: ''},
      {childName: 'Pelanggan Bantuan', url: ''}
    ]
  }
];

export class MenuMockRepository implements MenuRepositoryInterface {
  async getMenuItems(): Promise<MenuItem[]> {
    return mockMenuItems;
  }
}
