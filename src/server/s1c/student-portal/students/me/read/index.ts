import s1cClient from "@/server/s1c/client";

import { protectedProcedure } from "../../../procedures";
import type { StudentsMeReadResponseBody } from "./schema";

export const studentsMeReadUrl = "/students/me";

const studentsMeRead = protectedProcedure((access_token: string) =>
  s1cClient.get<StudentsMeReadResponseBody>(studentsMeReadUrl, {
    params: { Authorization: access_token },
  }),
);

export default studentsMeRead;
