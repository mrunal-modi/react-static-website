import "./App.scss";
import { BrowserRouter } from "react-router-dom";
import { Routes, Route } from "react-router-dom";
import Topbar from "./components/topbar/topbar";
import Footer from "./components/footer/footer";
import PageManager from "./pageManager/PageManager";
import { NotificationProvider } from "./hooks/NotificationContext";

import topbarConfig from "./config/topbar.config";

// 
// @ Note to Self:
// in future we might consider moving this value somewhere else, in some default config or something 
// but let it sit here for the time.
//
const defaultTopbarHeight = 80;

const App = () => {
  return (
    <NotificationProvider>
      <BrowserRouter>
        <Topbar {...topbarConfig} height={topbarConfig.height || defaultTopbarHeight}/>
        <main 
          className="main"
          style={{
            paddingTop: topbarConfig.position === 'fixed' ? topbarConfig.height || defaultTopbarHeight : ""
          }}
        >
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
