import s1cClient from "@/server/s1c/client";

import { publicProcedure } from "../../procedures";
import type { LoginRequestBody, LoginResponseBody } from "./schema";

const loginUrl = "/login";

const login = publicProcedure((body: LoginRequestBody) =>
  s1cClient.post<LoginResponseBody>(loginUrl, body),
);

export default login;
