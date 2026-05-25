-- AlterTable
ALTER TABLE "products" ADD COLUMN     "imageUrl" TEXT;

-- AlterTable
ALTER TABLE "user" ADD COLUMN     "role" TEXT NOT NULL DEFAULT 'user';
