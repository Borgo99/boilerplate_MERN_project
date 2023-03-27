import axios, { AxiosResponse } from "axios";
import { baseUrl } from "./baseUrl";

export const AxiosTryCatch = (fn: (...args: any) => any) => {
  return async (...args) => {
    try {
      const res = await fn(...args);
      if (res) return res;
    } catch (error) {
      if (!error.response?.data) return console.log("Unexpected error", error);
    }
  };
};

export const GET = async (
  url: string,
  jwt?: string
): Promise<AxiosResponse> => {
  const res = await axios.get(
    `${baseUrl}${url}`,
    jwt && {
      headers: { Authorization: `Bearer ${jwt}` },
    }
  );
  return res;
};

export const POST = async (
  url: string,
  body?: object,
  jwt?: string
): Promise<AxiosResponse> => {
  const res = await axios.post(
    `${baseUrl}${url}`,
    body,
    jwt && {
      headers: { Authorization: `Bearer ${jwt}` },
    }
  );
  return res;
};
