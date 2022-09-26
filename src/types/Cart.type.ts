import { Product } from "./Product.type";

export interface Cart {
  id: string;
  products: (Product & { quantity: number })[];
}
