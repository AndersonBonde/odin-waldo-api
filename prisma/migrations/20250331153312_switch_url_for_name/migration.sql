/*
  Warnings:

  - You are about to drop the column `url` on the `Picture` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Picture" DROP COLUMN "url",
ADD COLUMN     "name" TEXT NOT NULL DEFAULT 'pictureName';
