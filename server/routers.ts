import { z } from "zod";
import { COOKIE_NAME } from "@shared/const";
import { getSessionCookieOptions } from "./_core/cookies";
import { systemRouter } from "./_core/systemRouter";
import { publicProcedure, router } from "./_core/trpc";
import { createLead, getLeads } from "./db";
import { notifyOwner } from "./_core/notification";

export const appRouter = router({
  system: systemRouter,
  auth: router({
    me: publicProcedure.query(opts => opts.ctx.user),
    logout: publicProcedure.mutation(({ ctx }) => {
      const cookieOptions = getSessionCookieOptions(ctx.req);
      ctx.res.clearCookie(COOKIE_NAME, { ...cookieOptions, maxAge: -1 });
      return {
        success: true,
      } as const;
    }),
  }),

  leads: router({
    create: publicProcedure
      .input(
        z.object({
          name: z.string().min(2, "Nome deve ter pelo menos 2 caracteres"),
          email: z.string().email("Email inválido"),
          phone: z.string().min(10, "Telefone deve ter pelo menos 10 dígitos"),
          message: z.string().optional(),
        })
      )
      .mutation(async ({ input }) => {
        try {
          const result = await createLead({
            name: input.name,
            email: input.email,
            phone: input.phone,
            message: input.message,
          });

          await notifyOwner({
            title: "Novo Lead Recebido",
            content: `Nome: ${input.name}\nEmail: ${input.email}\nTelefone: ${input.phone}${input.message ? `\nMensagem: ${input.message}` : ""}`,
          });

          return { success: true };
        } catch (error) {
          console.error("Error creating lead:", error);
          throw new Error("Erro ao salvar lead. Tente novamente.");
        }
      }),

    list: publicProcedure.query(async () => {
      return await getLeads();
    }),
  }),
});

export type AppRouter = typeof appRouter;
