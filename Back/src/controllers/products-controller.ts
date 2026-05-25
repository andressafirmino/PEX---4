import { Products } from "@/protocols";
import { productsService } from "@/services";
import { Request, Response } from "express";
import httpStatus from 'http-status';

async function getProducts(_req: Request, res: Response) {
  const products = await productsService.getProducts();
  return res.status(httpStatus.OK).send(products);
}

async function postProducts(req: Request, res: Response) {
  const newProduct = { ...req.body };

  const product = await productsService.postProduct(newProduct);
  return res.status(httpStatus.CREATED).send(product);
}

export const productsController = {
  getProducts,
  postProducts
}