-- CreateTable
CREATE TABLE "Picture" (
    "id" SERIAL NOT NULL,
    "data" JSONB NOT NULL,

    CONSTRAINT "Picture_pkey" PRIMARY KEY ("id")
);
