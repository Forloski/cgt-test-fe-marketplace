import React, { createContext, useMemo, useCallback } from "react";
import { Product } from "../types";

type ProviderProps = {
  children: React.ReactNode;
};

type ProductOnCart = Product & {
  quantity: number;
};

type CartManagementCcontext = {
  cart: ProductOnCart[];
  cartTotal: number;
  cartCount: number;
  addToCart: (product: Product) => void;
  removeFromCart: (product: Product) => void;
  clearCart: () => void;
};

const CartManagement = createContext<CartManagementCcontext | undefined>(undefined);

const CartManagementProvider = ({ children }: ProviderProps) => {
  const [cart, setCart] = React.useState<ProductOnCart[]>([]);
  const [cartTotal, setCartTotal] = React.useState(0);
  const [cartCount, setCartCount] = React.useState(0);

  const calculateTotal = useCallback(() => {
    let total = 0;
    cart.forEach((item) => {
      total += item.price * item.quantity;
    });
    return total;
  }, [cart]);

  const calculateCount = useCallback(() => {
    let count = 0;
    cart.forEach((item) => {
      count += item.quantity;
    });
    return count;
  }, [cart]);

  const addToCart = useCallback(
    (product: Product) => {
      const productOnCart = cart.find((item) => item.id === product.id);
      if (productOnCart) {
        productOnCart.quantity++;
      } else {
        cart.push({ ...product, quantity: 1 });
      }
      setCart([...cart]);
      setCartTotal(calculateTotal());
      setCartCount(calculateCount());
    },
    [calculateCount, calculateTotal, cart]
  );

  const removeFromCart = useCallback(
    (product: Product) => {
      const newCart = cart.filter((item) => item.id !== product.id);
      setCart(newCart);
      setCartCount(cartCount - 1);
      setCartTotal(cartTotal - product.price);
    },
    [cart, cartCount, cartTotal]
  );

  const clearCart = () => {
    setCart([]);
    setCartCount(0);
    setCartTotal(0);
  };

  const value = useMemo(
    () => ({
      cart,
      cartTotal,
      cartCount,
      addToCart,
      removeFromCart,
      clearCart,
    }),
    [cart, cartTotal, cartCount, addToCart, removeFromCart]
  );

  return <CartManagement.Provider value={value}>{children}</CartManagement.Provider>;
};

const useCartManagement = () => {
  const context = React.useContext(CartManagement);

  if (context === undefined) {
    throw new Error("useCount must be used within a CartManagementProvider");
  }

  return context;
};

export { CartManagementProvider, useCartManagement };
