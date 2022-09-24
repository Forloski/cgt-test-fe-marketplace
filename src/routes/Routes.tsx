import React from "react";
import { ReactLocation, Router, Outlet, Route, DefaultGenerics } from "@tanstack/react-location";
import HomePage from "../pages/Home/Home.page";
import CartPage from "../pages/Cart/Cart.page";

type Props = {
  children: React.ReactNode;
};

const location = new ReactLocation();

const routes: Route<DefaultGenerics>[] = [
  {
    path: "/",
    element: <HomePage />,
  },
  {
    path: "cart",
    element: <CartPage />,
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
