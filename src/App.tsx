import React from "react";
import pictureA from "./assets/images/a.jpg";
import pictureB from "./assets/images/b.jpg";
import Routes from "./routes/Routes";
import { Link } from "@tanstack/react-location";

function cartItems() {
  return [];
}

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
                <a href="/cart">Cart ({cartItems().length})</a>
              </li>
            </ul>
          </nav>
          <hr />
        </header>

        {window.location.pathname === "/products/b" && (
          <div>
            <h1>Product B</h1>
            <p>Price: 30 USD</p>

            <button onClick={() => console.warn("Not implemented!")}>Add to cart</button>

            <div>
              <img src={pictureB} width={640} />
            </div>
          </div>
        )}
        {window.location.pathname === "/products/a" && (
          <div>
            <h1>Product A</h1>
            <p>Price: 10 USD</p>

            <button onClick={() => console.warn("Not implemented!")}>Add to cart</button>

            <div>
              <img src={pictureA} width={640} />
            </div>
          </div>
        )}
      </main>
    </Routes>
  );
}

export default App;
