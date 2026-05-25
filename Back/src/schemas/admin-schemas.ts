import Joi from 'joi';
import { Admin } from '@/protocols';

export const adminSchema = Joi.object<Admin>({
    user: Joi.string().required(),
    password: Joi.string().required(),
});