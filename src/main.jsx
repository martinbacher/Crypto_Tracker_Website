import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { CryptoDataProvider } from "./content/CryptoDataContext.jsx";
import { BrowserRouter } from "react-router-dom";

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <CryptoDataProvider>
      <App />
    </CryptoDataProvider>
  </BrowserRouter>
);
