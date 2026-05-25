import bcrypt from 'bcrypt';
import { PrismaClient } from '../generated/prisma/client';
import { PrismaPg } from '@prisma/adapter-pg';
import { Pool } from 'pg';
import 'dotenv/config';
import { buildImageUrl, seedProducts as productsSeedData } from './data/products';

const connectionString = process.env.DATABASE_URL;
if (!connectionString) {
  throw new Error('DATABASE_URL não está definida no ambiente.');
}

const pool = new Pool({ connectionString });
const adapter = new PrismaPg(pool);

const prisma = new PrismaClient({
  adapter,
  log: [],
});

const apiPublicUrl =
  process.env.API_PUBLIC_URL ??
  `http://localhost:${process.env.PORT ?? 4000}`;

async function seedAdmin() {
  const hashedPassword = await bcrypt.hash('adminpassword', 10);

  const admin = await prisma.users.upsert({
    where: { user: 'admin' },
    update: {},
    create: {
      user: 'admin',
      password: hashedPassword,
      role: 'admin',
    },
  });

  console.log('Admin:', admin.user);
}

async function seedProductCatalog() {
  await prisma.products.deleteMany();

  const products = await prisma.products.createMany({
    data: productsSeedData.map((product) => ({
      name: product.name,
      price: product.price,
      description: product.description,
      type: product.type,
      imageUrl: buildImageUrl(apiPublicUrl, product.type, product.imageFile),
    })),
  });

  console.log(`${products.count} produtos criados.`);
}

async function main() {
  await seedAdmin();
  await seedProductCatalog();
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
