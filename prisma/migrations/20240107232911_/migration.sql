-- CreateTable
CREATE TABLE `blogs` (
    `id` BIGINT UNSIGNED NOT NULL AUTO_INCREMENT,
    `created_at` TIMESTAMP(0) NULL,
    `updated_at` TIMESTAMP(0) NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `cards` (
    `id` BIGINT UNSIGNED NOT NULL AUTO_INCREMENT,
    `created_at` TIMESTAMP(0) NULL,
    `updated_at` TIMESTAMP(0) NULL,
    `credit_card_number` VARCHAR(255) NULL,
    `expiration_year` VARCHAR(255) NULL,
    `expiration_month` VARCHAR(255) NULL,
    `brand` VARCHAR(255) NULL,
    `card_holder_name` VARCHAR(255) NULL,
    `customer_card_id` VARCHAR(255) NULL,
    `user_id` BIGINT UNSIGNED NULL,
    `primary` BOOLEAN NOT NULL DEFAULT false,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `invoices` (
    `id` BIGINT UNSIGNED NOT NULL AUTO_INCREMENT,
    `created_at` TIMESTAMP(0) NULL,
    `updated_at` TIMESTAMP(0) NULL,
    `payment_method` VARCHAR(255) NULL,
    `transaction_id` VARCHAR(255) NULL,
    `total` DOUBLE NOT NULL,
    `status` ENUM('COMPLETED', 'PROCESSING', 'FAILED') NOT NULL DEFAULT 'PROCESSING',
    `user_id` BIGINT UNSIGNED NULL,
    `subscription_id` BIGINT UNSIGNED NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `migrations` (
    `id` INTEGER UNSIGNED NOT NULL AUTO_INCREMENT,
    `migration` VARCHAR(255) NOT NULL,
    `batch` INTEGER NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `notifications` (
    `id` BIGINT UNSIGNED NOT NULL AUTO_INCREMENT,
    `created_at` TIMESTAMP(5) NULL,
    `updated_at` TIMESTAMP(5) NULL,
    `message` VARCHAR(255) NOT NULL,
    `user_id` BIGINT UNSIGNED NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `subscriptions` (
    `id` BIGINT UNSIGNED NOT NULL AUTO_INCREMENT,
    `created_at` TIMESTAMP(0) NULL,
    `updated_at` TIMESTAMP(0) NULL,
    `name` VARCHAR(255) NULL,
    `description` VARCHAR(255) NULL,
    `start_date` VARCHAR(255) NULL,
    `end_date` VARCHAR(255) NULL,
    `user_id` BIGINT UNSIGNED NULL,
    `subscription_id` VARCHAR(255) NULL,
    `status` ENUM('active', 'canceled', 'expired', 'future', 'in_trial', 'live') NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `user_social_providers` (
    `id` BIGINT UNSIGNED NOT NULL AUTO_INCREMENT,
    `created_at` TIMESTAMP(0) NULL,
    `updated_at` TIMESTAMP(0) NULL,
    `provider` VARCHAR(255) NOT NULL DEFAULT 'SYSTEM',
    `user_id` BIGINT UNSIGNED NOT NULL DEFAULT 0,
    `url_register` VARCHAR(255) NOT NULL,
    `provider_id` VARCHAR(255) NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `users` (
    `id` BIGINT UNSIGNED NOT NULL AUTO_INCREMENT,
    `name` TEXT NOT NULL,
    `email` VARCHAR(255) NOT NULL,
    `email_verified_at` TIMESTAMP(0) NULL,
    `password` VARCHAR(255) NOT NULL DEFAULT '',
    `remember_token` VARCHAR(100) NULL,
    `created_at` TIMESTAMP(0) NULL,
    `updated_at` TIMESTAMP(0) NULL,
    `avatar` LONGTEXT NULL,
    `sex` ENUM('FEMALE', 'MALE', 'NO_APPLY') NOT NULL DEFAULT 'NO_APPLY',
    `birthday` VARCHAR(255) NULL,

    UNIQUE INDEX `users_email_unique`(`email`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
