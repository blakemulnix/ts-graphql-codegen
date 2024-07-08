-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Ride" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "bikeId" INTEGER NOT NULL,
    "name" TEXT,
    "distance" REAL NOT NULL,
    "location" TEXT NOT NULL,
    CONSTRAINT "Ride_bikeId_fkey" FOREIGN KEY ("bikeId") REFERENCES "Bike" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_Ride" ("bikeId", "distance", "id", "location", "name") SELECT "bikeId", "distance", "id", "location", "name" FROM "Ride";
DROP TABLE "Ride";
ALTER TABLE "new_Ride" RENAME TO "Ride";
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;
