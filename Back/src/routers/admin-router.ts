import { adminController } from '@/controllers';
import { validateBody } from '@/middlewares';
import { adminSchema } from '@/schemas';
import { Router } from 'express';

const adminRouter = Router();

adminRouter
    .post('/', validateBody(adminSchema), adminController.createAdmin)
    .post('/sign-in', validateBody(adminSchema), adminController.signIn);

export { adminRouter };