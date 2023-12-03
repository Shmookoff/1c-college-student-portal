import { format } from "date-fns";

import s1cClient from "@/server/s1c/client";

import { protectedProcedure } from "../../../procedures";
import type { StudentsMeGradesResponseBody } from "./schema";

export const studentsMeGradesUrl = "/students/me/grades";

const studentsMeGrades = protectedProcedure(
  (access_token: string, start: Date, end: Date) => {
    return s1cClient.get<StudentsMeGradesResponseBody>(studentsMeGradesUrl, {
      params: {
        Authorization: access_token,
        start: format(start, "yyyyMMdd"),
        end: format(end, "yyyyMMdd"),
      },
    });
  },
);

export default studentsMeGrades;
