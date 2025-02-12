import { MenuRepositoryInterface } from "../../../domain/interfaces/menuRepositoryInterface";
import { MenuItem } from "../../../domain/models/menuItem";


const mockMenuItems: MenuItem[] = [
  { name: "Internet" },
  { name: "Produk" },
  { name: "Layanan Digital" },
  { name: "Jelajah" },
  { name: "Bantuan" }
];

export class MenuMockRepository implements MenuRepositoryInterface {
  async getMenuItems(): Promise<MenuItem[]> {
    return mockMenuItems;
  }
}
