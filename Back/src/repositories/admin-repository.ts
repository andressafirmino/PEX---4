import { prisma } from '@/config';
import { Admin } from '@/protocols';

async function createAdmin(newAdmin: Admin) {
    const admin = await prisma.users.create({
        data: newAdmin
    })

    return admin;
}

async function findByUsername(username: string) {
    return prisma.users.findUnique({
        where: {
            user: username,
        },
    });
}

export const adminRepository = {
    createAdmin,
    findByUsername
}; 