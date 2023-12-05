import {
  accessTokenKey,
  refreshTokenKey,
  getTokenCookieOptions,
} from "../auth";
import studentPortalApi from "../s1c/student-portal";
import type { Middleware } from "./types";

const skipUrls = ["/_next", "/favicon.ico"];

const refresh = async (refreshToken: string) => {
  try {
    const { data: refreshResponse } =
      await studentPortalApi.auth.refresh(refreshToken);
    const setCookies = [
      {
        name: accessTokenKey,
        value: refreshResponse.access_token,
        ...getTokenCookieOptions(refreshResponse.access_token),
      },
      {
        name: refreshTokenKey,
        value: refreshResponse.refresh_token,
        ...getTokenCookieOptions(refreshResponse.refresh_token),
      },
    ];

    return { setCookies };
  } catch {}
};

const auth: Middleware = async (request) => {
  const skipUrlsMatches = skipUrls.map((url) =>
    request.nextUrl.pathname.startsWith(url),
  );
  if (skipUrlsMatches.some((v) => v === true)) return;

  const accessToken = request.cookies.get(accessTokenKey);
  const refreshToken = request.cookies.get(refreshTokenKey);

  if (!accessToken && refreshToken) return await refresh(refreshToken.value);
};

export default auth;
