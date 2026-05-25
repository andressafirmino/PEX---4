import { api } from '../config';
import type { CreateProductPayload, MenuType, ProductRecord } from '../protocols';

async function getProducts(): Promise<MenuType> {
  const { data } = await api.get<MenuType>('/products');
  return data;
}

async function createProduct(payload: CreateProductPayload): Promise<ProductRecord> {
  const { data } = await api.post<ProductRecord>('/products', payload);
  return data;
}

export const productsService = {
  getProducts,
  createProduct,
};
