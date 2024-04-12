-- CreateTable
CREATE TABLE "users" (
    "id" SERIAL NOT NULL,
    "name" TEXT,
    "email" TEXT,
    "cpf" INTEGER NOT NULL,
    "password" TEXT NOT NULL,

    CONSTRAINT "users_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "cars" (
    "id" SERIAL NOT NULL,
    "car_model" TEXT NOT NULL,
    "car_brand" TEXT NOT NULL,
    "car_price" DOUBLE PRECISION,

    CONSTRAINT "cars_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "car_enjoys" (
    "id" SERIAL NOT NULL,
    "id_user" INTEGER NOT NULL,
    "id_car" INTEGER NOT NULL,

    CONSTRAINT "car_enjoys_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "users_cpf_key" ON "users"("cpf");
