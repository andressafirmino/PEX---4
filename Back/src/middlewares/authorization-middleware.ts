import { Response, NextFunction } from 'express';
import httpStatus from 'http-status';
import { AuthenticatedRequest } from './authentication-middleware';

export function ensureAdmin(req: AuthenticatedRequest, res: Response, next: NextFunction) {
    const { role } = req;

    if (role !== 'admin') {
        return res.status(httpStatus.FORBIDDEN).send({
            message: "Acesso negado. Apenas administradores podem realizar esta ação."
        });
    }

    next();
}