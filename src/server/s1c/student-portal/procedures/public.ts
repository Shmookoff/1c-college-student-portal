import "server-only";

export type ProcedureA = unknown[];

const publicProcedure = <A extends ProcedureA, R>(
  procedure: (...rest: [...A]) => Promise<R>,
) => {
  return async (...rest: [...A]) => {
    return await procedure(...rest);
  };
};

export default publicProcedure;
