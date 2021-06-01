const dev = process.env.NODE_ENV !== "production";
export const apiServer = dev ? "http://localhost:1337" : "0.0.0.0";
