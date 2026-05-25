import { invalidCredentialsError } from "@/errors/invalid-credentials-error";
import { unauthorizedError } from "@/errors/unauthorized-error";
import { Admin } from "@/protocols";
import { adminRepository } from "@/repositories";import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

async function createAdmin(newAdmin: Admin) {
    const admin = await adminRepository.createAdmin(newAdmin);
    return admin;
}

async function signIn({ user, password }) {
  const existingUser = await adminRepository.findByUsername(user);
  if (!existingUser) throw invalidCredentialsError();

  const isPasswordValid = await bcrypt.compare(password, existingUser.password);
  if (!isPasswordValid) throw unauthorizedError();

  const token = jwt.sign(
    { 
      userId: existingUser.id,
      role: existingUser.role
    }, 
    process.env.JWT_SECRET, 
    { expiresIn: '7d' } 
  );

  return {
    user: existingUser.user,
    role: existingUser.role,
    token,
  };
}

export const adminService = {
    createAdmin,
    signIn
}