import {
  createContext,
  useMemo,
  useCallback,
  useContext,
  useState,
  ReactNode,
  useLayoutEffect,
} from "react";
import { useGetCart } from "../queries/carts/getCart.query";
import { usePostCart } from "../queries/carts/postCart.query";
import { usePutCart } from "../queries/carts/putCart.query";
import { Cart, Product } from "../types";
import { useLocalUserIdentifier } from "./LocalUSerIdentifier.context";

type ProviderProps = {
  children: ReactNode;
};

type CartManagementContext = {
  cart: Cart | undefined;
  isCartLoading: boolean;
  cartTotal: number;
  cartCount: number;
  addToCart: (product: Product) => void;
  removeFromCart: (product: Product) => void;
  clearCart: () => void;
};

const CartManagement = createContext<CartManagementContext | undefined>(undefined);

const CartManagementProvider = ({ children }: ProviderProps) => {
  const { localUserIdentifier } = useLocalUserIdentifier();
  const postCart = usePostCart();
  const putCart = usePutCart();
  const { data: cart, isLoading: isCartLoading } = useGetCart(
    localUserIdentifier,
    ["carts", localUserIdentifier],
    {},
    {
      onError: () => {
        postCart.mutate(localUserIdentifier);
      },
    }
  );
  const [cartTotal, setCartTotal] = useState(0);
  const [cartCount, setCartCount] = useState(0);

  const calculateTotal = useCallback(() => {
    let total = 0;
    cart?.products.forEach((item) => {
      total += item.price * item.quantity;
    });
    return total;
  }, [cart]);

  const calculateCount = useCallback(() => {
    let count = 0;
    cart?.products.forEach((item) => {
      count += item.quantity;
    });
    return count;
  }, [cart]);

  useLayoutEffect(() => {
    if (cart) {
      setCartTotal(calculateTotal);
      setCartCount(calculateCount);
    }
  }, [calculateCount, calculateTotal, cart]);

  const addToCart = useCallback(
    (product: Product) => {
      const productOnCart = cart?.products.find((item) => item.id === product.id);
      if (productOnCart) {
        productOnCart.quantity++;
      } else {
        cart?.products.push({ ...product, quantity: 1 });
      }
      putCart.mutate({ id: localUserIdentifier, products: [...cart!.products] });
      setCartTotal(calculateTotal());
      setCartCount(calculateCount());
    },
    [calculateCount, calculateTotal, cart, localUserIdentifier, putCart]
  );

  const removeFromCart = useCallback(
    (product: Product) => {
      const newCart = cart!.products.filter((item) => item.id !== product.id);
      putCart.mutate({ id: localUserIdentifier, products: newCart });
      setCartCount(cartCount - 1);
      setCartTotal(cartTotal - product.price);
    },
    [cart, cartCount, cartTotal, localUserIdentifier, putCart]
  );

  const clearCart = useCallback(() => {
    putCart.mutate({ id: localUserIdentifier, products: [] });
    setCartCount(0);
    setCartTotal(0);
  }, [localUserIdentifier, putCart]);

  const value = useMemo(
    () => ({
      cart,
      isCartLoading,
      cartTotal,
      cartCount,
      addToCart,
      removeFromCart,
      clearCart,
    }),
    [cart, isCartLoading, cartTotal, cartCount, addToCart, removeFromCart, clearCart]
  );

  return <CartManagement.Provider value={value}>{children}</CartManagement.Provider>;
};

const useCartManagement = () => {
  const context = useContext(CartManagement);

  if (context === undefined) {
    throw new Error("useCartManagement must be used within a CartManagementProvider");
  }

  return context;
};

export { CartManagementProvider, useCartManagement };
