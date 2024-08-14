import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Register from "./components/Register";
import Navbar from "./components/SingUP";
import Home from "./components/Home";
import Dynamic from "./components/dynamic ";

function App() {
  return (
    <div className="App">
      <table />
      <BrowserRouter>
        {/* <Dynamic /> */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/" element={<Dynamic />} />
          <Route path="/signup" element={<Navbar />} />
          <Route path="/Register" element={<Register />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
