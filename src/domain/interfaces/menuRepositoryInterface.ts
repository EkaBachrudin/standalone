import { MenuItem } from "../models/menuItem";

export interface MenuRepositoryInterface {
  getMenuItems(): Promise<MenuItem[]>;
}
