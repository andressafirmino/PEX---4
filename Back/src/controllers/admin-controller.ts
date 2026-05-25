import { invalidCredentialsError } from "@/errors/invalid-credentials-error";
import { Admin } from "@/protocols";
import { adminService } from "@/services";
import { Request, Response } from "express";
import httpStatus from 'http-status';

async function createAdmin(req: Request, res: Response) {
  const newAdmin = { ...req.body };

  const admin = await adminService.createAdmin(newAdmin);
  return res.status(httpStatus.CREATED).send(admin);
}

async function signIn(req: Request, res: Response) {
  const { user, password } = req.body;

  if (!user || !password) {
    return res.status(httpStatus.BAD_REQUEST).send(invalidCredentialsError());
  }

  try {
    const authenticationData = await adminService.signIn({ user, password });
    return res.status(httpStatus.OK).send(authenticationData);
  }
  catch (error) {
    return res.status(httpStatus.UNAUTHORIZED).send(invalidCredentialsError());
  }
}

export const adminController = {
  createAdmin,
  signIn
}