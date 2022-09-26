import { useQuery, QueryKey, UseQueryResult } from "@tanstack/react-query";
import { AxiosRequestConfig } from "axios";
import { httpService } from "../../services/http/http.service";
import { Product } from "../../types";

const getProducts = async (config?: AxiosRequestConfig): Promise<Product[]> => {
  const { data } = await httpService.get(`/products`, config);

  return data;
};

const useGetProducts = (
  queryKey: QueryKey,
  config?: AxiosRequestConfig
): UseQueryResult<Product[], unknown> => {
  return useQuery(queryKey, () => getProducts(config));
};

export { getProducts, useGetProducts };
