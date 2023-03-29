import React from "react";
import {  BrowserRouter} from "react-router-dom";


import Header from "./components/Header";
import Sidebar from "./components/Sidebar";

const Body = (props) => {
   return(
       <BrowserRouter>
          <Header />
          <main >
            {props.childrem}
          </main>
          <Sidebar />
       </BrowserRouter>
   )
}

export default Body;