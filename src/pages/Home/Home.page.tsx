import { Link } from "@tanstack/react-location";
import React from "react";

const HomePage = () => {
  return (
    <div>
      Welcome to our shop!
      <p>
        You are probably interested in <a href="/products/a">A</a>.
      </p>
      <p>
        Check out the newest product <Link to="/products/b">B</Link>!
      </p>
    </div>
  );
};

export default HomePage;
