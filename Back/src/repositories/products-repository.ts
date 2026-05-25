import { prisma } from '@/config';
import { Products } from '@/protocols';

async function getProducts() {

  const products = prisma.products.findMany();

  return products;

}

async function postProduct(newProduct: Products) {
  const product = await prisma.products.create({
    data: newProduct
  })

  return product;
}

export const productsRepository = {
  getProducts,
  postProduct
}; 
