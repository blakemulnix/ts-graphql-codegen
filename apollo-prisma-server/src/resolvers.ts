import { PrismaClient, Bike, Ride } from "@prisma/client";
import { Bike as gqlBike, Resolvers } from "./generated/graphql";

const prisma = new PrismaClient();

export const resolvers: Resolvers = {
  Query: {
    bikes: async () => {
      return prisma.bike.findMany({ include: { rides: true } });
    },
    bike: async (_, { id }) => {
      return prisma.bike.findUnique({
        where: { id: id },
        include: { rides: true },
      });
    },
    rides: async () => {
      return prisma.ride.findMany();
    },
    ride: async (_, { id }) => {
      return prisma.ride.findUnique({
        where: { id: id },
      });
    },
  },
  Mutation: {
    addBike: async (_, { input }) => {
      return prisma.bike.create({
        data: input,
        include: { rides: true },
      });
    },
    addRide: async (_, { input }) => {
      return prisma.ride.create({
        data: input,
      });
    },
  },
};
