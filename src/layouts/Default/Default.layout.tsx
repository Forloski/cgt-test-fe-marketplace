import { Link } from "@tanstack/react-location";

const DefaultLayout = () => {
  return (
    <main>
      <header>
        90s shop
        <nav>
          <ul style={{ listStyleType: "none", display: "flex" }}>
            <li>
              <Link to="/">Home </Link>
            </li>
            |
            <li>
              <Link to="/cart">Cart </Link>
            </li>
          </ul>
        </nav>
        <hr />
      </header>
    </main>
  );
};

export default DefaultLayout;
