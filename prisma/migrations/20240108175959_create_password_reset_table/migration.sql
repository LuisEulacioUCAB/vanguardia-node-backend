-- CreateTable
CREATE TABLE `password_reset` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `email` LONGTEXT NOT NULL,
    `token` LONGTEXT NOT NULL,
    `created_at` TIMESTAMP(0) NULL DEFAULT CURRENT_TIMESTAMP(0),
    `updated_at` TIMESTAMP(0) NULL DEFAULT CURRENT_TIMESTAMP(0),

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;