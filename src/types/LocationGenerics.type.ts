import { MakeGenerics } from "@tanstack/react-location";
import { Product } from "./Product.type";

export type LocationGenerics = MakeGenerics<{
  LoaderData: {
    product: Product;
  };
}>;
