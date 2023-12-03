import s1cClient from "@/server/s1c/client";

import { publicProcedure } from "../../procedures";
import type { GroupsListResponseBody } from "./schema";

const groupsListUrl = "/groups";

const groupsList = publicProcedure(() => {
  return s1cClient.get<GroupsListResponseBody>(groupsListUrl);
});

export default groupsList;
