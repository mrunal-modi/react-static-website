import "./App.scss";
import { BrowserRouter } from "react-router-dom";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/navbar/navbar";
import Home from "./pages/home/home";
import Footer from "./components/footer/footer";
import AboutUs from "./pages/about-us/about-us";
import Product1 from "./pages/product-1/product-1";
import Product2 from "./pages/product-2/product-2";


const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/product-1" element={<Product1 />} />
          <Route path="/product-2" element={<Product2 />} />
          <Route
            path="*"
            element={
              <main style={{ padding: "1rem" }}>
                <p>404 Not Found</p>
              </main>
            }
          />
        </Routes>

      </main>
      <Footer/>
    </BrowserRouter>
  );
};

export default App;
