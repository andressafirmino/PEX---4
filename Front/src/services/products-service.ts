import { api } from '../config';
import type { MenuType } from '../protocols';

async function getProducts(): Promise<MenuType> {
  const { data } = await api.get<MenuType>('/products');
  return data;
}

export const productsService = {
  getProducts,
};
