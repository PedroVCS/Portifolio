import React from "react";
import { BrowserRouter,  Routes, Route} from "react-router-dom";
import Body from './Layout';
import Home from "./components/Home";

function App() {
  return (
    <>
    <Body />
    <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} /> 
        </Routes>
    </BrowserRouter>
    
    </>
  );
}

export default App;
