-- CreateTable
CREATE TABLE "Visitor" (
    "id" UUID NOT NULL,
    "name" VARCHAR(255) NOT NULL,
    "email" VARCHAR(255) NOT NULL,
    "phone" VARCHAR(50) NOT NULL,
    "address" TEXT NOT NULL,

    CONSTRAINT "Visitor_pkey" PRIMARY KEY ("id")
);
