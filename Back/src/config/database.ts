import { PrismaClient } from '../../generated/prisma/client';
import { PrismaPg } from '@prisma/adapter-pg'; 
import { Pool } from 'pg';
import "dotenv/config";

const connectionString = process.env.DATABASE_URL;
const pool = new Pool({ connectionString });
const adapter = new PrismaPg(pool);

export let prisma: PrismaClient;
export function connectDb(): void {
  prisma = new PrismaClient({ 
    adapter,
    log: [],});
}

export async function disconnectDB(): Promise<void> {
  await prisma?.$disconnect();
}