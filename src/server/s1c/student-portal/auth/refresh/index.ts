import s1cClient from "@/server/s1c/client";

import type { RefreshResponseBody } from "./schema";

export const refreshUrl = "/refresh";

const refresh = (refresh_token: string) =>
  s1cClient.post<RefreshResponseBody>(refreshUrl, undefined, {
    params: { Authorization: refresh_token },
  });

export default refresh;
