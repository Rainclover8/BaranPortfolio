import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import Home from "../src/components/Home";
import AboutMe from "./components/AboutMe";
import Navbar from "./components/Navbar";

function App() {

  return (
    <BrowserRouter>
    {/* <Navbar/> */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="about/" element={<AboutMe />} />
        </Routes>
    </BrowserRouter>
  );
}

export default App;
