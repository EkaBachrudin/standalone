import { MenuItem } from "../../../domain/models/menuItem";
import { MenuRepositoryInterface } from "../../../domain/interfaces/menuRepositoryInterface";

export class MenuApiRepository implements MenuRepositoryInterface {
  async getMenuItems(): Promise<MenuItem[]> {
    const response = await fetch("https://api.example.com/menu");
    if (!response.ok) {
      throw new Error("Failed to fetch menu items");
    }
    const data = await response.json();
    return data;
  }
}
