import { z } from "zod";

import {
  createTRPCRouter,
  protectedProcedure,
} from "~/server/api/trpc";

export const noteRouter = createTRPCRouter({

    getAll: protectedProcedure.query(({ ctx }) => {
        return ctx.db.note.findMany({
            where:{
                userId:ctx.session.user.id
            }
        });
      }),
      
      create : protectedProcedure
      .input(z.object({text:z.string(),heading:z.string()}))
      .mutation(({ctx,input})=>{
        return ctx.db.note.create({
            data:{
                heading:input.heading,
                text:input.text,
                userId:ctx.session.user.id,
            },
        })
    }),
});