import React from "react";
import Navbar from "./navbar.js";
import About from "./about.js";
import WorkList from "./workList.js";
import Footer from "./footer.js";
import FloatNav from "./floatNav.js";
import Contact from "./contact.js";
import "../styles/style.css";
import image01 from "../assets/justin-lindemann-BiA9dOnPwLY-unsplash.jpg";

const structure = () => {
  let url = "https://source.unsplash.com/random/1920×1080/?german,city";
  console.log(url);
  return (
    <div
      className="body-div"
      style={{
        backgroundImage: `url(${url})`,
      }}
    >
      <div className="content-wrap">
        <div className="left-invis"></div>
        <main className="content-main">
          <FloatNav />
          <Navbar />
          <About />
          <WorkList />
          <Contact />
          <Footer />
        </main>
      </div>
    </div>
  );
};

export default structure;
