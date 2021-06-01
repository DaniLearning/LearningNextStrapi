const dev = process.env.NODE_ENV !== "production";
export const apiServer = dev
  ? "https://polar-sands-85300.herokuapp.com"
  : "https://polar-sands-85300.herokuapp.com";
