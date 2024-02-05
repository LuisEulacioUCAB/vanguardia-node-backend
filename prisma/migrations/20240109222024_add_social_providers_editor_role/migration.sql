/*
  Warnings:

  - The primary key for the `user_social_providers` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to alter the column `id` on the `user_social_providers` table. The data in that column could be lost. The data in that column will be cast from `UnsignedBigInt` to `Int`.

*/
-- AlterTable
ALTER TABLE `user_roles` MODIFY `name` ENUM('SUPER_ADMINISTRATOR', 'ADMINISTRATOR', 'USER', 'EDITOR') NOT NULL;

-- AlterTable
ALTER TABLE `user_social_providers` DROP PRIMARY KEY,
    MODIFY `id` INTEGER NOT NULL AUTO_INCREMENT,
    ADD PRIMARY KEY (`id`);
