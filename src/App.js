import "./App.scss";
import { BrowserRouter } from "react-router-dom";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/navbar/navbar";
import Footer from "./components/footer/footer";
import PageManager from "./pageManager/PageManager";

const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <main className="main">
        <Routes>
          <Route path="*" element={<PageManager />} />
          {/* <Route path="/about-us" element={<AboutUs />} />
          <Route path="/contact-us" element={<ContactUs />} />
          <Route path="/products/:id" element={<Product/>} /> */}
          {/* <Route
            path="*"
            element={
              <main style={{ padding: "1rem" }}>
                <p>404 Not Found</p>
              </main>
            }
          /> */}
        </Routes>

      </main>
      <Footer/>
    </BrowserRouter>
  );
};

export default App;
