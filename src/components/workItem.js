import React from "react";
import "../styles/style.css";

export default function workItem() {
  return (
    <div className="list-item-div">
      <ul className="tech-ul"></ul>
      <div className="desc-div">
        <header className="desc-header">
          <h2></h2>
        </header>
        <p className="short-desc">This is a short description of the item.</p>
        <p className="long-desc">
          This is a short description of the item.This is a short description of
          the item.This is a short description of the item.
        </p>
      </div>
      <figure className="item-figure"></figure>
    </div>
  );
}
