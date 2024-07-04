import { Bike, PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  // Clear all data
  await prisma.ride.deleteMany();
  await prisma.bike.deleteMany();

  // Create some bikes
  const bike1: Bike = await prisma.bike.create({
    data: {
      brand: 'Diamondback',
      model: 'Haanjo 3',
    },
  });

  const bike2 = await prisma.bike.create({
    data: {
      brand: 'Salsa',
      model: 'Warbird GRX 810',
    },
  });

  // Create some rides
  await prisma.ride.create({
    data: {
      bikeId: bike1.id,
      name: 'Gravel Ride',
      distance: 51.3,
      location: 'Canyonlands National Park',
    },
  });

  await prisma.ride.create({
    data: {
      bikeId: bike1.id,
      name: 'Evening Ride',
      distance: 30.0,
      location: 'Neil Smith Trail',
    },
  });

  await prisma.ride.create({
    data: {
      bikeId: bike2.id,
      name: 'Morning Ride',
      distance: 60.0,
      location: 'Heritage Trail',
    },
  });

  const bikes = await prisma.bike.findMany({
    include: {
      rides: true,
    },
  });
  
}

main()
  .catch((e) => {
    console.error(e);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
