import { FetchClient } from "@/shared/lib";

export const api = new FetchClient({
  baseUrl: import.meta.env.VITE_API_SERVER_URL as string,
  options: {
    credentials: "include",
  },
});
