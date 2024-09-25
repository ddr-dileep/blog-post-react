import ReactDOM from "react-dom/client";
import { BrowserRouter as Router } from "react-router-dom";
import "./index.css";
import App from "./App";
import { HeaderNavigation } from "./components/layouts/HeaderNavigation";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <>
    <Router>
      <HeaderNavigation />
      <App />
    </Router>
  </>
);
