import s1cClient from "@/server/s1c/client";

export const logOut = "/logout";

const logout = (refresh_token: string) =>
  s1cClient.post<null>(logOut, undefined, {
    params: { Authorization: refresh_token },
  });

export default logout;
