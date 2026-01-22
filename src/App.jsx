import Home from "./Pages/Home";
import Navbar from "./Components/layout/Navbar";
import Footer from "./Components/layout/Footer";
import Product from "./Pages/Product/Product";
import LoadingPage from "./Pages/LoadingPage";
import { useContext } from "react";
import { ApiDataContext } from "./Context/ContextApi";
import NavbarDesktop from "./Components/layout/NavbarDesktop";

const App = () => {
  const data = useContext(ApiDataContext);

  if (data == null) {
    return <LoadingPage />;
  }
  return (
    <div className=" h-screen w-full">
      <div className=" block md:hidden">
        <Navbar />
      </div>
      <div className=" hidden md:block">
        <NavbarDesktop />
      </div>
      <Home />
      <Product />
      <Footer />
    </div>
  );
};

export default App;
