-- CreateEnum
CREATE TYPE "MagicItemType" AS ENUM ('WEAPON', 'ARMOUR', 'AMULET');

-- CreateEnum
CREATE TYPE "Class" AS ENUM ('WARRIOR', 'MAGE', 'ARCHER', 'ROGUE', 'BARD');

-- CreateTable
CREATE TABLE "Character" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "nickname" TEXT NOT NULL,
    "class" "Class" NOT NULL,
    "level" INTEGER NOT NULL DEFAULT 1,
    "strength" INTEGER NOT NULL,
    "defense" INTEGER NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Character_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "MagicItem" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "strength" INTEGER NOT NULL,
    "defense" INTEGER NOT NULL,
    "type" "MagicItemType" NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,
    "character_id" TEXT,

    CONSTRAINT "MagicItem_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "MagicItem" ADD CONSTRAINT "MagicItem_character_id_fkey" FOREIGN KEY ("character_id") REFERENCES "Character"("id") ON DELETE SET NULL ON UPDATE CASCADE;
