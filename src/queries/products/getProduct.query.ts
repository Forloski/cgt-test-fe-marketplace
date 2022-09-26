import { useQuery, QueryKey, UseQueryResult } from "@tanstack/react-query";
import { AxiosRequestConfig } from "axios";
import { httpService } from "../../services/http/http.service";
import { Product } from "../../types";

const getProduct = async (productId: string, config?: AxiosRequestConfig): Promise<Product> => {
  try {
    const { data } = await httpService.get(`/products/${productId}`, config);
    return data;
  } catch (error) {
    throw error;
  }
};

const useGetProduct = (
  productId: string,
  queryKey: QueryKey,
  config?: AxiosRequestConfig
): UseQueryResult<Product, unknown> => {
  return useQuery(queryKey, () => getProduct(productId, config));
};

export { getProduct, useGetProduct };
