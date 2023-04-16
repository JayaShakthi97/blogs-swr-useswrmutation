// axios api for todo get, post, put, delete

import {
  axiosInstance,
  useGetRequest,
  useManualGetRequest,
  usePatchRequest,
  usePostRequest,
} from "./api";
import { Todo } from "../models/todo";
import { AxiosError } from "axios";

const baseUrl = "/todo";

export const getTodos = async (): Promise<Todo[]> => {
  const response = await axiosInstance.get(baseUrl);
  return response.data;
};

export const useGetTodos = () => {
  const { data, error, isLoading, isValidating, mutate } = useGetRequest<
    Todo[],
    undefined,
    AxiosError
  >(baseUrl);

  return { data, error, isLoading, isValidating, mutate };
};

export const getTodo = async (id: number): Promise<Todo> => {
  const response = await axiosInstance.get(`${baseUrl}/${id}`);
  return response.data;
};

export const useGetTodo = () => {
  const { data, error, isMutating, trigger } = useManualGetRequest<
    { id: number },
    Todo,
    AxiosError
  >(baseUrl);

  return { data, error, isLoading: isMutating, trigger };
};

export const postTodo = async (todo: Omit<Todo, "id">): Promise<Todo> => {
  const response = await axiosInstance.post(baseUrl, todo);
  return response.data;
};

export const usePostTodo = () => {
  const { data, error, trigger, isMutating } = usePostRequest<
    Omit<Todo, "id">,
    undefined,
    Todo,
    AxiosError
  >(baseUrl);

  return { data, error, trigger, isMutating };
};

export const patchTodo = async (todo: Partial<Todo>): Promise<Todo> => {
  const response = await axiosInstance.patch(`${baseUrl}/${todo.id}`, todo);
  return response.data;
};

export const usePatchTodo = () => {
  const { data, error, trigger, isMutating } = usePatchRequest<
    Partial<Todo>,
    { id: number },
    Todo,
    AxiosError
  >(baseUrl);

  return { data, error, trigger, isMutating };
};

export const deleteTodo = async (id: number): Promise<void> => {
  await axiosInstance.delete(`${baseUrl}/${id}`);
};
