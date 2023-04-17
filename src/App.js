import "./App.scss";
import { BrowserRouter } from "react-router-dom";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/navbar/navbar";
import Footer from "./components/footer/footer";
import PageManager from "./pageManager/PageManager";
import { NotificationProvider } from "./hooks/NotificationContext";

const App = () => {
  return (
    <NotificationProvider>
      <BrowserRouter>
        <Navbar />
        <main className="main">
          <Routes>
            <Route path="*" element={<PageManager />} />
          </Routes>
        </main>
        <Footer />
      </BrowserRouter>
    </NotificationProvider>
  );
};

export default App;
