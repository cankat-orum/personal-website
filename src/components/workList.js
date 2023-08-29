import React from "react";
import "../styles/style.css";
import WorkItem from "./workItem.js";
import image01 from "../assets/justin-lindemann-BiA9dOnPwLY-unsplash.jpg";

const workList = () => {
  return (
    <section id="works">
      <main className="worklist-main">
        <header className="worklist-header">
          <h2>Works</h2>
        </header>
        <ul className="worklist-ul">
          <li>
            <WorkItem
              title="BİLDİR"
              shortDesc="Sharing urban problems"
              longDesc="Bildir gives users a platform where they can share the urban issues they are facing."
              image={image01}
              imageAlt="Image Alt"
            />
          </li>
          <li>
            <WorkItem
              title="BUDGED"
              shortDesc="Personal finance app"
              longDesc="Budged is a personal finance app that focuses on 50/30/20 budgeting method, built with Flutter and SQLite."
              image={image01}
              imageAlt="Image Alt"
            />
          </li>
          <li>
            <WorkItem
              title="TO-DO App"
              shortDesc="A fun to-do demo built with React JS and Giphy API."
              longDesc=""
              image={image01}
              imageAlt="Image Alt"
            />
          </li>
        </ul>
      </main>
    </section>
  );
};
export default workList;
