import React from "react";
import Navbar from "./navbar.js";
import About from "./about.js";
import "../styles/style.css";
import image01 from "../assets/justin-lindemann-BiA9dOnPwLY-unsplash.jpg";

export default function structure() {
  return (
    <div
      className="body-div"
      style={{
        backgroundImage: `url(${image01})`,
      }}
    >
      <div className="content-wrap">
        <div className="left-invis"></div>
        <main className="content-main">
          <Navbar />
          <About />
        </main>
      </div>
    </div>
  );
}
