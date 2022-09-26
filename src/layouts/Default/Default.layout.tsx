import { Link } from "@tanstack/react-location";
import { useCartManagement } from "../../contexts/CartManagement.context";

const DefaultLayout = () => {
  const cartManagement = useCartManagement();

  return (
    <main>
      <header>
        90s shop
        <nav>
          <ul style={{ listStyleType: "none", display: "flex" }}>
            <li>
              <Link id="link-to-home" to="/">
                Home{" "}
              </Link>
            </li>
            |
            <li>
              <Link id="link-to-cart" to="/cart">
                Cart ({cartManagement.cartCount}){" "}
              </Link>
            </li>
          </ul>
        </nav>
        <hr />
      </header>
    </main>
  );
};

export default DefaultLayout;
