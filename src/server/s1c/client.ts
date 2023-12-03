import { env } from "@/env";
import axios from "axios";

const s1cClient = axios.create({
  baseURL: env.S1C_CONF_HOST,
  auth: { username: env.S1C_CONF_USERNAME, password: env.S1C_CONF_PASSWORD },
});

export default s1cClient;
