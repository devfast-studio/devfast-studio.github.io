import { createClient } from "tinacms/dist/client";
import { queries } from "./types";
export const client = createClient({ url: 'http://localhost:4001/graphql', token: '01b18866dcc815970735ed602364af8cdf8bf2f1', queries });
export default client;
  