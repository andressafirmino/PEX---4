import { MenuItemType, MenuType, ProductCategory, Products } from '@/protocols';
import { productsRepository } from '@/repositories';

const PRODUCT_CATEGORIES: ProductCategory[] = ['snacks', 'drinks', 'desserts'];

function createEmptyMenu(): MenuType {
  return {
    snacks: [],
    drinks: [],
    desserts: [],
  };
}

function isProductCategory(type: string): type is ProductCategory {
  return PRODUCT_CATEGORIES.includes(type as ProductCategory);
}

function toMenuItem(product: {
  name: string;
  price: number;
  description: string;
  imageUrl: string | null;
}): MenuItemType {
  return {
    name: product.name,
    price: product.price,
    description: product.description,
    image: product.imageUrl?.trim() ?? '',
  };
}

async function getProducts(): Promise<MenuType> {
  const products = await productsRepository.getProducts();
  const menu = createEmptyMenu();

  for (const product of products) {
    if (!isProductCategory(product.type)) {
      continue;
    }

    menu[product.type].push(toMenuItem(product));
  }

  return menu;
}

async function postProduct(newProduct: Products) {
  const product = await productsRepository.postProduct(newProduct);
  return product;
}

export const productsService = {
  getProducts,
  postProduct,
};
