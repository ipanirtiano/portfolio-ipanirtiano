import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import DetailPortfolio from "./pages/DetailPortfolio";
import { useContext } from "react";
import { DarkModeContext } from "./context/DarkModeContext";

function App() {
  const { isDark } = useContext(DarkModeContext);

  return (
    <>
      <div className={`${isDark}`}>
        <Router>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
          </Routes>
          <Routes>
            <Route path="/detail" element={<DetailPortfolio />} />
          </Routes>
        </Router>
      </div>
    </>
  );
}

export default App;
