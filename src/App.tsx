import React from "react";
import Routes from "./routes/Routes";
import { Link } from "@tanstack/react-location";

function App() {
  return (
    <Routes>
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
    </Routes>
  );
}

export default App;
