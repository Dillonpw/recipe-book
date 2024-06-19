-- CreateTable
CREATE TABLE "Recipe" (
    "id" SERIAL NOT NULL,
    "title" VARCHAR(255) NOT NULL,
    "ingredients" TEXT[],
    "steps" TEXT[],
    "tags" TEXT[],

    CONSTRAINT "Recipe_pkey" PRIMARY KEY ("id")
);
