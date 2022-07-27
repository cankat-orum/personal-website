import React from "react";
import "../styles/style.css";

export default function navbar() {
  return (
    <header className="nav-div">
      <nav className="nav-sem">
        <a class="logo" href="#">
          Second Branch
        </a>
        <ul class="nav-ul">
          <li>
            <a href="#">About Me</a>
          </li>
          <li>
            <a href="#">My Work</a>
          </li>
          <li>
            <a href="#">Hire Me</a>
          </li>
        </ul>
      </nav>
    </header>
  );
}
