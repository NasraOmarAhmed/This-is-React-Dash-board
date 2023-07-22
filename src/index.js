import React from "react";
import{createRoot} from "react-dom/client"
import Body from "./components/Body"
import Footer from "./components/Footer";
import Style from "./components/Style";



const root = createRoot(document.getElementById ("root")) 
root.render(
  <div className="parent">
  <Style />
  <Body/> 
  <Footer />
  </div>
)



















