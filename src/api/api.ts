// export axios instance
import axios from "axios";
import useSWR from "swr";
import useSWRMutation from "swr/mutation";

const instance = axios.create({
  baseURL: "http://localhost:4040",
});

const useGetRequest = <
  ResponseData = unknown,
  QueryParams = unknown,
  Error = unknown
>(
  url: string,
  params?: QueryParams
) => {
  const { data, error, isLoading, isValidating, mutate } = useSWR<
    ResponseData,
    Error
  >(
    url,
    async (url) => {
      const response = await instance.get(url, { params });
      return response.data;
    },
    { revalidateOnFocus: false, errorRetryCount: 0 }
  );

  return { data, error, isLoading, isValidating, mutate };
};

const useManualGetRequest = <
  QueryParams = unknown,
  ResponseData = unknown,
  Error = unknown
>(
  url: string
) => {
  const {
    data: responseData,
    error,
    trigger,
    isMutating,
  } = useSWRMutation<ResponseData, Error, string, QueryParams>(
    url,
    async (url: string, arg: { arg: QueryParams }) => {
      const response = await instance.get(url, {
        params: arg.arg,
      });
      return response.data;
    }
  );

  return { data: responseData, error, trigger, isMutating };
};

const usePostRequest = <
  RequestData = unknown,
  QueryParams = unknown,
  ResponseData = unknown,
  Error = unknown
>(
  url: string
) => {
  const {
    data: responseData,
    error,
    trigger,
    isMutating,
  } = useSWRMutation<
    ResponseData,
    Error,
    string,
    { requestData: RequestData; queryParams?: QueryParams }
  >(
    url,
    async (
      url: string,
      arg: { arg: { requestData: RequestData; queryParams?: QueryParams } }
    ) => {
      const response = await instance.post(url, arg.arg.requestData, {
        params: arg.arg.queryParams,
      });
      return response.data;
    }
  );

  return { data: responseData, error, trigger, isMutating };
};

const usePatchRequest = <
  RequestData = unknown,
  QueryParams = unknown,
  ResponseData = unknown,
  Error = unknown
>(
  url: string
) => {
  const {
    data: responseData,
    error,
    trigger,
    isMutating,
  } = useSWRMutation<
    ResponseData,
    Error,
    string,
    { requestData: RequestData; queryParams?: QueryParams }
  >(
    url,
    async (
      url: string,
      arg: { arg: { requestData: RequestData; queryParams?: QueryParams } }
    ) => {
      const response = await instance.patch(url, arg.arg.requestData, {
        params: arg.arg.queryParams,
      });
      return response.data;
    }
  );

  return { data: responseData, error, trigger, isMutating };
};

export {
  instance as axiosInstance,
  useGetRequest,
  usePostRequest,
  usePatchRequest,
  useManualGetRequest,
};
