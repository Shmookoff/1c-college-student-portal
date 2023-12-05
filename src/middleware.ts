import { NextResponse, type NextRequest } from "next/server";
import middlewares from "./server/middlewares";
import type { ResponseCookie } from "next/dist/compiled/@edge-runtime/cookies";

const middleware = async (request: NextRequest) => {
  const setCookies: ResponseCookie[] = [];

  for (const middleware of middlewares) {
    const middlewareResult = await middleware(request);
    setCookies.push(...(middlewareResult?.setCookies ?? []));
    middlewareResult?.setCookies?.forEach((cookie) =>
      request.cookies.set(cookie),
    );
  }

  setCookies.forEach((cookie) => request.cookies.set(cookie));

  const response = NextResponse.next({
    request,
  });

  setCookies.forEach((cookie) => response.cookies.set(cookie));

  return response;
};

export default middleware;
