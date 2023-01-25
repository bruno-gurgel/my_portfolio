import prisma from "@/lib/prisma/prisma";
export const resolvers = {
  Query: {
    allUsers: () => {
      return prisma.user.findMany();
    },
  },
};
