import "./App.scss";
import { BrowserRouter } from "react-router-dom";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/navbar/navbar";
import Home from "./pages/home/home";
import Footer from "./components/footer/footer";
import NavItem1 from "./pages/nav-item-1/nav-item-1";
import NavItem2 from "./pages/nav-item-2/nav-item-2";


const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/nav-item-1" element={<NavItem1 />} />
          <Route path="/nav-item-2" element={<NavItem2 />} />
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
