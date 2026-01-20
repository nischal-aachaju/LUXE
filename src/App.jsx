import React from "react";
import Home from "./Pages/Home";
import Navbar from "./Components/layout/Navbar";
import Product from "./Pages/Product";

const App = () => {
  return (
    <div className=" h-screen w-full">
      <Navbar />
      <Product />
    </div>
  );
};

export default App;
