-- DropIndex
DROP INDEX "Role_nameRole_key";

-- AlterTable
ALTER TABLE "Permission" ADD COLUMN     "isSystem" BOOLEAN NOT NULL DEFAULT false;

-- AlterTable
ALTER TABLE "Role" ADD COLUMN     "isSysteme" BOOLEAN NOT NULL DEFAULT false;

-- CreateTable
CREATE TABLE "Enterprises" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "matricule" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "phone" TEXT NOT NULL,
    "status" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Enterprises_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Shops" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "matricule" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "phone" TEXT NOT NULL,
    "status" TEXT NOT NULL,
    "logo" TEXT,
    "enterpriseId" INTEGER NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Shops_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Customer" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "matricule" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "phone" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "address" TEXT,
    "roleId" INTEGER NOT NULL,
    "token" TEXT,
    "refreshToken" TEXT,
    "status" TEXT NOT NULL,
    "shopId" INTEGER NOT NULL,
    "enterpriseId" INTEGER,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Customer_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Enterprises_matricule_key" ON "Enterprises"("matricule");

-- CreateIndex
CREATE UNIQUE INDEX "Enterprises_email_key" ON "Enterprises"("email");

-- CreateIndex
CREATE UNIQUE INDEX "Enterprises_phone_key" ON "Enterprises"("phone");

-- CreateIndex
CREATE UNIQUE INDEX "Shops_matricule_key" ON "Shops"("matricule");

-- CreateIndex
CREATE UNIQUE INDEX "Shops_email_key" ON "Shops"("email");

-- CreateIndex
CREATE UNIQUE INDEX "Shops_phone_key" ON "Shops"("phone");

-- CreateIndex
CREATE UNIQUE INDEX "Customer_matricule_key" ON "Customer"("matricule");

-- CreateIndex
CREATE UNIQUE INDEX "Customer_email_key" ON "Customer"("email");

-- CreateIndex
CREATE UNIQUE INDEX "Customer_phone_key" ON "Customer"("phone");

-- AddForeignKey
ALTER TABLE "Shops" ADD CONSTRAINT "Shops_enterpriseId_fkey" FOREIGN KEY ("enterpriseId") REFERENCES "Enterprises"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Customer" ADD CONSTRAINT "Customer_roleId_fkey" FOREIGN KEY ("roleId") REFERENCES "Role"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Customer" ADD CONSTRAINT "Customer_shopId_fkey" FOREIGN KEY ("shopId") REFERENCES "Shops"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Customer" ADD CONSTRAINT "Customer_enterpriseId_fkey" FOREIGN KEY ("enterpriseId") REFERENCES "Enterprises"("id") ON DELETE CASCADE ON UPDATE CASCADE;
