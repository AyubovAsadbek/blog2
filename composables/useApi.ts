import axios, { AxiosRequestConfig } from "axios";

export const useApi = () => {
  const { $config } = useNuxtApp();

  // Create an Axios instance with default config
  const axiosInstance = axios.create({
    baseURL: $config.public.apiBaseUrl, // Use your public runtime config
  });

  // Method to send GET requests
  const get = async <T = any>(
    url: string,
    config?: AxiosRequestConfig
  ): Promise<T> => {
    const response = await axiosInstance.get<T>(url, config);
    return response.data;
  };

  // Method to send POST requests
  const post = async <T = any>(
    url: string,
    data: any,
    config?: AxiosRequestConfig
  ): Promise<T> => {
    const response = await axiosInstance.post<T>(url, data, config);
    return response.data;
  };

  // Add other HTTP methods if needed (PUT, DELETE, etc.)
  const put = async <T = any>(
    url: string,
    data: any,
    config?: AxiosRequestConfig
  ): Promise<T> => {
    const response = await axiosInstance.put<T>(url, data, config);
    return response.data;
  };

  const del = async <T = any>(
    url: string,
    config?: AxiosRequestConfig
  ): Promise<T> => {
    const response = await axiosInstance.delete<T>(url, config);
    return response.data;
  };

  return { get, post, put, del };
};
