import React from "react";
import "../styles/style.css";

export default function about() {
  const mystyle = {
    backgroundColor: "DodgerBlue",
    width: "50px",
    height: "50px",
  };
  return (
    <>
      <main>
        <section>
          <figure>
            <div style={mystyle}></div>
          </figure>
          <article>
            <header>
              <h1>Hi, my name's Daniel.</h1>
            </header>
            <p>
              I'm a full stack web developer based in Seattle, WA with a
              background in technical and customer-focused support. Looking for
              an opportunity to apply creative, analytical, and communicative
              skills on a development team.
            </p>
            <footer>
              <ul>
                <li>
                  <a href="#">My Work</a>
                </li>
                <li>
                  <a href="#">Hire Me</a>
                </li>
              </ul>
            </footer>
          </article>
        </section>
      </main>
    </>
  );
}
