import { useGetRequest, usePatchRequest } from "./api";
import { Profile } from "../models/profile";
import { AxiosError } from "axios";

const baseUrl = "/profile";

export const useGetProfile = () => {
  const { data, error, isLoading, isValidating, mutate } = useGetRequest<
    Profile,
    undefined,
    AxiosError
  >(baseUrl);

  return { data, error, isLoading, isValidating, mutate };
};

export const usePatchProfile = () => {
  const { data, error, trigger, isMutating } = usePatchRequest<
    Partial<Profile>,
    Profile,
    AxiosError
  >(baseUrl);

  return { data, error, trigger, isMutating };
};
