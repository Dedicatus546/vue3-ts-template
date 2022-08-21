import axios, { AxiosRequestConfig } from "axios";

const http = axios.create({
  baseURL: "",
});

http.interceptors.response.use((res) => {
  // 这里可以做一些判断
  // 比如说如果接口全是 200 ，然后是通过返回结果的 code 来分类错误的话，简单的话可以按照下面这样写
  // if (res.data.code !== 200) {
  //   return Promise.reject(res.data.message);
  // }
  return res.data;
});

export const get = <ApiResult = unknown, ApiQuery = unknown>(
  url: string,
  params?: ApiQuery,
  config?: AxiosRequestConfig<ApiQuery>
): Promise<ApiResult> => {
  return http.get(url, {
    params,
    ...(config ?? {}),
  });
};

export default http;
