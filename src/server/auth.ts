import { cookies } from "next/headers";
import { jwtDecode } from "jwt-decode";
import studentPortalApi from "./s1c/student-portal";
import { AxiosError } from "axios";
import type { StudentsMeReadResponseBody } from "./s1c/student-portal/students/me/read/schema";

export const accessTokenKey = "AccessToken";
export const refreshTokenKey = "RefreshToken";

export const getTokenCookieOptions = (token: string) => {
  const payload = jwtDecode<{ exp: number }>(token);
  return {
    expires: payload.exp * 1000 - 10000,
    httpOnly: true,
    // secure: true,
  };
};

const auth = async (): Promise<
  | ({ accessToken: string } & (
      | { student: StudentsMeReadResponseBody }
      | { admin: unknown }
    ))
  | undefined
> => {
  const accessTokenCookie = cookies().get(accessTokenKey);

  if (accessTokenCookie) {
    const accessToken = accessTokenCookie.value;

    if (false) {
      return { admin: {}, accessToken: accessToken };
    }
    try {
      const { data: student } =
        await studentPortalApi.students.me.read(accessToken);
      return { student, accessToken: accessToken };
    } catch (error) {
      if (error instanceof AxiosError) {
        return;
      }
      throw error;
    }
  }
};

export default auth;
