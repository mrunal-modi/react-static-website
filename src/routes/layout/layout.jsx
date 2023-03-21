import { Routes, Route } from "react-router-dom";
import Navbar from "../../components/navbar/navbar";
import Home from "../../pages/home/home";


export default function Layout() {
  return (
    <>
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
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
    </>
  );
}
