import type { ResponseCookie } from "next/dist/compiled/@edge-runtime/cookies";
import type { NextRequest } from "next/server";

type MaybePromise<T> = Promise<T> | T;

export type Middleware = (
  request: NextRequest,
) => MaybePromise<MiddlewareResult | undefined>;

export type MiddlewareResult = {
  setCookies?: ResponseCookie[];
};
