import { Link } from "@tanstack/react-location";

const HomePage = () => {
  return (
    <div>
      Welcome to our shop!
      <p>
        You are probably interested in{" "}
        <Link id="link-to-product-a" to="/products/a">
          A
        </Link>
        .
      </p>
      <p>
        Check out the newest product{" "}
        <Link id="link-to-product-b" to="/products/b">
          B
        </Link>
        !
      </p>
    </div>
  );
};

export default HomePage;
