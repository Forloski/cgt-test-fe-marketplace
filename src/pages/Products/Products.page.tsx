import { Navigate, useMatch } from "@tanstack/react-location";
import { images } from "../../assets/images";
import { useCartManagement } from "../../contexts/CartManagement.context";
import { useGetProduct } from "../../queries/products/getProduct.query";
import { LocationGenerics } from "../../types";

const ProductsPage = () => {
  const {
    params: { productId },
  } = useMatch<LocationGenerics>();
  const { data: product, isLoading } = useGetProduct(productId, ["products", productId]);
  const cartManagement = useCartManagement();

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (product) {
    return (
      <div>
        <h1>Product {product.name}</h1>
        <p>Price: {product.price} USD</p>

        <button onClick={() => cartManagement.addToCart(product)}>Add to cart</button>

        <div>
          <img src={(images as any)[product.picture]} width={640} />
        </div>
      </div>
    );
  }

  return <Navigate to="/" />;
};

export default ProductsPage;
