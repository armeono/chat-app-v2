import axios from "axios";

export const websocketAxios = axios.create({
  baseURL: process.env.NEXT_PUBLIC_BACKEND_URL,
  headers: {
    Connection: "upgrade",
    Upgrade: "websocket",
  },
});
