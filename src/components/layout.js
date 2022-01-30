import React from "react"
import Navbar from './navbar.js';
import Footer from "./footer.js";
import "./layout.css"
export default function Layout({ children }) {
  return  (
    <div>{children}
        <Navbar/>
        <Footer/>
    </div>
  )
}