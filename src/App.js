                                                ////////// PARENT FILE OF THE PROJECT//////////////////

import React from "react";
import "./index.css";
import Home from "./routes/Home";
import About from "./routes/About";
import Premier from "./routes/Premier";
import Contact from "./routes/Contact";
import {Route,Routes} from "react-router-dom";

function App() {
  return (
    <>
      {/* Routing the pages */}
      <Routes>   
        <Route path="/" element={<Home/>}  />
        <Route path="/premier" element={<Premier/>}  />
        <Route path="/about" element={<About/>}  />
        <Route path="/contact" element={<Contact/>}  />
      </Routes>
    
    
    </>
  );
}

export default App;
