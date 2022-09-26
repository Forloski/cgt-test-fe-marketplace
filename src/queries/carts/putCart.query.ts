import { useMutation, UseMutationResult } from "@tanstack/react-query";
import { AxiosRequestConfig } from "axios";
import { httpService } from "../../services/http/http.service";
import { queryService } from "../../services/query/query.service";
import { Cart } from "../../types";

const putCart = async (cart: Cart, config?: AxiosRequestConfig): Promise<Cart> => {
  try {
    const { data } = await httpService.put(`/carts/${cart.id}`, cart, config);
    return data;
  } catch (error) {
    throw error;
  }
};

const usePutCart = (): UseMutationResult<Cart, unknown, Cart, unknown> => {
  return useMutation((cart) => putCart(cart), {
    onSuccess: () => {
      queryService.invalidateQueries(["carts"]);
    },
  });
};

export { putCart, usePutCart };
