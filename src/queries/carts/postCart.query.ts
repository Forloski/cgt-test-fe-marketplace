import { useMutation, UseMutationResult } from "@tanstack/react-query";
import { AxiosRequestConfig } from "axios";
import { httpService } from "../../services/http/http.service";
import { queryService } from "../../services/query/query.service";
import { Cart } from "../../types";

const postCart = async (id: string, config?: AxiosRequestConfig): Promise<Cart> => {
  try {
    const { data } = await httpService.post(`/carts`, { id, products: [] }, config);
    return data;
  } catch (error) {
    throw error;
  }
};

const usePostCart = (): UseMutationResult<Cart, unknown, string, unknown> => {
  return useMutation((id) => postCart(id), {
    onSuccess: () => {
      queryService.invalidateQueries(["carts"]);
    },
  });
};

export { postCart, usePostCart };
