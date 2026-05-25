import { productsController } from '@/controllers';
import { authenticateToken, ensureAdmin, validateBody } from '@/middlewares';
import { productSchema } from '@/schemas';
import { Router } from 'express';

const productsRouter = Router();

productsRouter
    .get('/', productsController.getProducts)
    .post('/', authenticateToken, ensureAdmin, validateBody(productSchema), productsController.postProducts)
    
export { productsRouter };