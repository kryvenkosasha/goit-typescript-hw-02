import axios, { AxiosResponse } from "axios";

const ACCESS_KEY = "m1_aCrol2RAfZegER2hGtnnENwyk2fMJV8g0UuvwyNs";
const instance = axios.create({
  baseURL: "https://api.unsplash.com",
});

export interface UnsplashPhoto {
  id: string;
  alt_description: string ;
  urls: {
    raw: string;
    full: string;
    regular: string;
    small: string;
    thumb: string;
  };
}

interface UnsplashResponse {
  total: number;
  total_pages: number;
  results: UnsplashPhoto[];
}

export const requestPicturesQuery = async (
  query: string,
  page: number
): Promise<UnsplashResponse> => {
  const { data }: AxiosResponse<UnsplashResponse> = await instance.get(
    `/search/photos/?client_id=${ACCESS_KEY}&query=${query}&page=${page}`
  );
  return data;
};
