import React from "react";
import { useMatch, Navigate } from "@tanstack/react-location";
import { LocationGenerics } from "../../types";

const ProductsPage = () => {
  const {
    data: { product },
  } = useMatch<LocationGenerics>();

  return product ? (
    <div>
      <h1>Product {product.name}</h1>
      <p>Price: {product.price} USD</p>

      <button onClick={() => console.warn("Not implemented!")}>Add to cart</button>

      <div>
        <img src={product.picture} width={640} />
      </div>
    </div>
  ) : (
    <Navigate to="/" />
  );
};

export default ProductsPage;
