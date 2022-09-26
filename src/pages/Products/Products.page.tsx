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
        <h1 id="txt-name">Product {product.name}</h1>
        <p id="txt-price">Price: {product.price} USD</p>

        <button id="btn-add-to-cart" onClick={() => cartManagement.addToCart(product)}>
          Add to cart
        </button>

        <div>
          <img id="product-image" src={(images as any)[product.picture]} width={640} />
        </div>
      </div>
    );
  }

  return <Navigate to="/" />;
};

export default ProductsPage;
