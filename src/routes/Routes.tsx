import React from "react";
import {
  ReactLocation,
  Router,
  Outlet,
  Route,
  DefaultGenerics,
  Navigate,
} from "@tanstack/react-location";
import HomePage from "../pages/Home/Home.page";
import CartPage from "../pages/Cart/Cart.page";
import ProductsPage from "../pages/Products/Products.page";
import products from "./data";
import { LocationGenerics } from "../types";

type Props = {
  children: React.ReactNode;
};

const location = new ReactLocation<LocationGenerics>();

const routes: Route<LocationGenerics>[] = [
  {
    path: "/",
    element: <HomePage />,
  },
  {
    path: "cart",
    element: <CartPage />,
  },
  {
    path: "products/:productId",
    element: <ProductsPage />,
    loader: ({ params }) => ({
      product: products.find((product) => product.id === params.productId),
    }),
  },
  {
    path: "*",
    element: <Navigate to="/" />,
  },
];

const Routes = (props: Props) => {
  return (
    <Router location={location} routes={routes}>
      {props.children}
      <Outlet />
    </Router>
  );
};

export default Routes;
