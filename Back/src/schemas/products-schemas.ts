import Joi from 'joi';
import { Products } from '@/protocols';

export const productSchema = Joi.object<Products>({
    name: Joi.string().required(),
    price: Joi.number().precision(2).required(),
    description: Joi.string().required(),
    type: Joi.string().valid('snacks', 'drinks', 'desserts').required(),
    imageUrl: Joi.string().uri().optional(),
});