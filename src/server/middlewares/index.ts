import authMiddleware from "./auth";
import type { Middleware } from "./types";

const middlewares: Middleware[] = [authMiddleware];

export default middlewares;
