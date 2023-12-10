import { env } from "@/env";
import axios from "axios";
import urlJoin from "url-join";
import fetchAdapter from "@haverstack/axios-fetch-adapter";

const s1cClient = axios.create({
  baseURL: urlJoin(env.S1C_CONF_HOST, "hs", env.S1C_EXT_PATH),
  auth: { username: env.S1C_CONF_USERNAME, password: env.S1C_CONF_PASSWORD },
  adapter: fetchAdapter,
});

// const basicAuth = (username: string, password: string) => {
//   const encodedCredentials = String.fromCodePoint(
//     ...new TextEncoder().encode(`${username}:${password}`),
//   );
//   return `Basic ${btoa(encodedCredentials)}`;
// };

// const baseUrl = urlJoin(env.S1C_CONF_HOST, "hs", env.S1C_EXT_PATH);

// const s1cClient1 = <R>(url: string, init?: RequestInit): Promise<R> => {
//   url = urlJoin(baseUrl, url);
//   const headers = new Headers(init?.headers);
//   const Authorization = headers.get("Authorization");

//   headers.set(
//     "Authorization",
//     basicAuth(env.S1C_CONF_USERNAME, env.S1C_CONF_PASSWORD),
//   );
// };

export default s1cClient;
