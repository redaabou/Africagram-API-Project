/*
  Warnings:

  - Made the column `firstname` on table `utilisateur` required. This step will fail if there are existing NULL values in that column.
  - Made the column `lastname` on table `utilisateur` required. This step will fail if there are existing NULL values in that column.
  - Made the column `email` on table `utilisateur` required. This step will fail if there are existing NULL values in that column.
  - Made the column `password` on table `utilisateur` required. This step will fail if there are existing NULL values in that column.
  - Made the column `isAdmin` on table `utilisateur` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE `post` ADD COLUMN `image_url` VARCHAR(750) NULL;

-- AlterTable
ALTER TABLE `utilisateur` MODIFY `firstname` VARCHAR(100) NOT NULL,
    MODIFY `lastname` VARCHAR(100) NOT NULL,
    MODIFY `email` VARCHAR(100) NOT NULL,
    MODIFY `password` VARCHAR(255) NOT NULL,
    MODIFY `isAdmin` BOOLEAN NOT NULL DEFAULT false;
