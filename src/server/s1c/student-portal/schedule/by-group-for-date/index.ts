import s1cClient from "@/server/s1c/client";

import { publicProcedure } from "../../procedures";
import type { ScheduleByGroupForDateResponseBody } from "./schema";

export const byGroupForDateUrl = "/schedule";

const generateScheduleByGroupForDateUrl = (groupId: string, date: string) =>
  `/schedule/${groupId}/${date}`;

const scheduleByGroupForDate = publicProcedure(
  (groupId: string, date: string) =>
    s1cClient.get<ScheduleByGroupForDateResponseBody>(
      generateScheduleByGroupForDateUrl(groupId, date),
    ),
);

export default scheduleByGroupForDate;
