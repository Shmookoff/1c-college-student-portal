import { z } from "zod";
import { createTRPCRouter, publicProcedure } from "../trpc";
import studentPortalApi from "@/server/s1c/student-portal";
import {
  accessTokenKey,
  getTokenCookieOptions,
  refreshTokenKey,
} from "@/server/auth";

const auth = createTRPCRouter({
  login: publicProcedure
    .input(
      z.object({
        login: z
          .string()
          .max(15)
          .refine((v) => /^\d+$/.test(v), {
            message: "Login must be an integer",
          })
          .transform((v) => v.padEnd(15, " ")),
        password: z
          .string()
          .max(15)
          .refine((v) => /^\d+$/.test(v), {
            message: "Password must be an integer",
          })
          .transform((v) => v.padEnd(15, " ")),
      }),
    )
    .mutation(async ({ input, ctx }) => {
      const loginResult = await studentPortalApi.auth.login(input);
      const {
        data: { access_token, refresh_token },
      } = loginResult;
      ctx.setCookie(
        accessTokenKey,
        access_token,
        getTokenCookieOptions(access_token),
      );
      ctx.setCookie(
        refreshTokenKey,
        refresh_token,
        getTokenCookieOptions(refresh_token),
      );
    }),
});

export default auth;
