import { MenuRepositoryInterface } from "../../../domain/interfaces/menuRepositoryInterface";
import { MenuItem } from "../../../domain/models/menuItem";


const mockMenuItems: MenuItem[] = [
  { name: "Internet", url: '#' },
  { name: "Produk", url: '#' },
  { name: "Layanan Digital", url: '#' },
  { name: "Jelajah", 
    url: "#",
    childs: [
      {childName: 'Foundation One', url: ''},
      {childName: 'Foundation Prabayar', url: ''},
      {childName: 'Foundation Lite', url: ''},
      {childName: 'Foundation Halo', url: ''},
      {childName: 'By.u', url: ''},
      {childName: 'Roaming & Sli', url: ''},
      {childName: 'Foundation Orbit', url: ''},
      {childName: 'EzNet', url: ''},
      {childName: 'EzNet Wireless', url: ''},
      {childName: 'Bundling', url: ''},
      {childName: '5G', url: ''},
    ]
   },
  { 
    name: "Bantuan",
    url: "#",
    childs: [
      {childName: 'Pusat Bantuan', url: ''},
      {childName: 'Pelanggan Bantuan', url: ''},
      {childName: 'Foundation Grapari', url: ''}
    ]
  }
];

export class MenuMockRepository implements MenuRepositoryInterface {
  async getMenuItems(): Promise<MenuItem[]> {
    return mockMenuItems;
  }
}
