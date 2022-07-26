import React from "react";

export default function navbar() {
  return (
    <div className="nav-div">
      <nav className="nav-sem">
        <a class="logo" href="#">
          Header Logo
        </a>
        <ul class="navbar-ul">
          <li>
            <a href="#">Home</a>
          </li>
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
    </div>
  );
}
