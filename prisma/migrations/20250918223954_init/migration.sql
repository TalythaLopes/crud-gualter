/*
  Warnings:

  - You are about to drop the column `author` on the `Reserva` table. All the data in the column will be lost.
  - Added the required column `qtdPessoas` to the `Reserva` table without a default value. This is not possible if the table is not empty.

*/
-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Reserva" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "proposito" TEXT NOT NULL,
    "qtdPessoas" INTEGER NOT NULL,
    "dtInicio" TEXT NOT NULL,
    "dtFim" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "roomId" TEXT NOT NULL,
    CONSTRAINT "Reserva_userId_fkey" FOREIGN KEY ("userId") REFERENCES "Usuario" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "Reserva_roomId_fkey" FOREIGN KEY ("roomId") REFERENCES "Room" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_Reserva" ("dtFim", "dtInicio", "id", "proposito", "roomId", "userId") SELECT "dtFim", "dtInicio", "id", "proposito", "roomId", "userId" FROM "Reserva";
DROP TABLE "Reserva";
ALTER TABLE "new_Reserva" RENAME TO "Reserva";
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;
