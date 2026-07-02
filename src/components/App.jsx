import "../styles/App.css";
import Home from "../pages/Home";
import { Routes, Route } from "react-router-dom";
import Favorite from "../pages/Favorite";
import Navbar from "./Navbar";

function App() {
  return (
    <div >
      <Navbar />
      <main className="main-content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/favorite" element={<Favorite />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
