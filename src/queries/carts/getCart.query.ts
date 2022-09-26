import { useQuery, QueryKey, UseQueryResult, UseQueryOptions } from "@tanstack/react-query";
import { AxiosRequestConfig } from "axios";
import { httpService } from "../../services/http/http.service";
import { Cart } from "../../types";

const getCart = async (userId: string, config?: AxiosRequestConfig): Promise<Cart> => {
  try {
    const { data } = await httpService.get(`/carts/${userId}`, config);
    return data;
  } catch (error) {
    throw error;
  }
};

const useGetCart = (
  userId: string,
  queryKey: QueryKey,
  config?: AxiosRequestConfig,
  queryOptions?: UseQueryOptions<Cart, unknown>
): UseQueryResult<Cart, unknown> => {
  return useQuery(queryKey, () => getCart(userId, config), queryOptions);
};

export { getCart, useGetCart };
