import { Link } from "@tanstack/react-location";
import { useLocalUserIdentifier } from "../../contexts/LocalUSerIdentifier.context";
import { useGetCart } from "../../queries/carts/getCart.query";

const HomePage = () => {
  const { localUserIdentifier } = useLocalUserIdentifier();
  const { data: cart } = useGetCart(localUserIdentifier, ["carts", localUserIdentifier]);

  console.log(cart);

  return (
    <div>
      Welcome to our shop!
      <p>
        You are probably interested in <Link to="/products/a">A</Link>.
      </p>
      <p>
        Check out the newest product <Link to="/products/b">B</Link>!
      </p>
    </div>
  );
};

export default HomePage;
