import { MenuRepositoryInterface } from "../../domain/interfaces/menuRepositoryInterface";
import { MenuMockRepository } from "../api/menu/menuMock";
import { MenuApiRepository } from "../api/menu/menuApi";

const USE_MOCK = true; 

export const menuRepository: MenuRepositoryInterface = USE_MOCK
  ? new MenuMockRepository()
  : new MenuApiRepository();
