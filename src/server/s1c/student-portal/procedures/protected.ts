import "server-only";

import publicProcedure, { type ProcedureA } from "./public";

const protectedProcedure = <A extends ProcedureA, R>(
  procedure: (access_token: string, ...rest: [...A]) => Promise<R>,
) => {
  return (access_token: string, ...rest: [...A]) => {
    return publicProcedure(procedure)(access_token, ...rest);
  };
};

export default protectedProcedure;
