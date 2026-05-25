import { NextFunction, Response, Request } from 'express';
import jwt from 'jsonwebtoken';
import httpStatus from 'http-status';
import { unauthorizedError } from '@/errors/unauthorized-error';

export interface AuthenticatedRequest extends Request {
  userId: number;
  role: 'admin' | 'user' | string;
}

export async function authenticateToken(
  req: AuthenticatedRequest, 
  res: Response, 
  next: NextFunction
) {
  const authHeader = req.header('Authorization');
  if (!authHeader) return res.status(httpStatus.UNAUTHORIZED).send(unauthorizedError());

  const [type, token] = authHeader.split(' ');
  if (type !== 'Bearer' || !token) return res.status(httpStatus.UNAUTHORIZED).send(unauthorizedError());

  try {
    const secret = process.env.JWT_SECRET;
    if (!secret) throw new Error('JWT_SECRET não está definido.');
    
    const payload = jwt.verify(token, secret) as { userId: number, role: 'admin' | 'user' };
    
    req.userId = payload.userId;
    req.role = payload.role; 

    next();

  } catch (err) {
    return res.status(httpStatus.UNAUTHORIZED).send(unauthorizedError());
  }
}