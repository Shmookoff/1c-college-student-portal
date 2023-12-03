import s1cClient from "@/server/s1c/client";

import { publicProcedure } from "../../procedures";
import type { GroupsReadResponseBody } from "./schema";

export const generateGroupsReadUrl = (groupId: string) => {
  return `/groups/${groupId}`;
};

const groupsRead = publicProcedure((groupId: string) =>
  s1cClient.get<GroupsReadResponseBody>(generateGroupsReadUrl(groupId)),
);

export default groupsRead;
