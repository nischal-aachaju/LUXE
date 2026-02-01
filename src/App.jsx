import Home from "./Pages/Home";
import Navbar from "./Components/layout/Navbar";
import Footer from "./Components/layout/Footer";
import Product from "./Pages/Product/Product";
import LoadingPage from "./Pages/LoadingPage";
import { useContext } from "react";
import { ApiDataContext } from "./Context/ContextApi";
import NavbarDesktop from "./Components/layout/NavbarDesktop";
import { Route, Routes } from "react-router-dom";
import NotFound from "./Pages/NotFound";
import Discovery from "./Pages/Discovery";
import Cart from "./Pages/Cart";
import Navbarpendingpage from "./Components/layout/navbarpendingpage";
const App = () => {
  const data = useContext(ApiDataContext);

  if (data == null) {
    return <LoadingPage />;
  }
  return (
    <div className="w-full h-screen ">
      <div className="block md:hidden">
        <Navbar />
      </div>
      <div className="hidden md:block">
        <NavbarDesktop />
      </div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products/:id" element={<Product />} />
        <Route path="*" element={<NotFound />} />
        <Route path="/all-products" element={<Discovery />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/page/:id" element={<Navbarpendingpage/>} />
      </Routes>  
          
      <Footer />
    </div>
  );
};

export default App;
