import { z } from "zod";

import {
  createTRPCRouter,
  privateProcedure,
  publicProcedure,
} from "~/server/api/trpc";

export const exampleRouter = createTRPCRouter({
  hello: publicProcedure
    .input(z.object({ text: z.string() }))
    .query(({ input }) => {
      return {
        greeting: `Hello ${input.text}`,
      };
    }),
  getProfile: privateProcedure.query(async ({ ctx }) => {
    return await ctx.prisma.profiles.findUnique({
      where: {
        id: ctx.user.id,
      },
    });
  }),
});
