import { BrowserRouter } from "react-router-dom";
import "./App.scss";
import Layout from "./routes/layout/layout";

const App = () => {
  return (
    <BrowserRouter>
      <Layout />
    </BrowserRouter>
  );
};

export default App;
