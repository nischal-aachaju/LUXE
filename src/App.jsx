import React, { useEffect, useState } from "react";
import Home from "./Pages/Home";
import Navbar from "./Components/layout/Navbar";
import Product from "./Pages/Product";
import axios from "axios";
import LoadingPage from "./Pages/LoadingPage";
const App = () => {
  const [api, setApi] = useState(null)
  useEffect(() => {
    const ApiCall = async () => {
      setApi(await axios.get("https://dummyjson.com/products?limit=30"))
    }
    ApiCall()
  }, [])
  if (api==null){
    return <LoadingPage />
  }
  return (
    <div className=" h-screen w-full">
      <Navbar />
      <Home api={api}/>
      <Product />
    </div>
  );
};

export default App;
