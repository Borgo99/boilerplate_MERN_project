export const baseUrl: string =
  process.env.NODE_ENV !== "production"
    ? `http://127.0.0.1:${process.env.PORT}`
    : "";
