import { Route, Routes } from "react-router-dom";
import Home from "./pages/home";
import About from "./pages/about";

function App() {
  return (
    <>
      <Routes>
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />
      </Routes>
    </>
  );
}

export default App;
