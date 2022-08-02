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
              title="THIS IS THE TITLE!"
              shortDesc="This is a short description of the item."
              longDesc="This is a long description of the item. This is a long description of the item. This is a long description of the item."
              image={image01}
              imageAlt="Image Alt"
            />
          </li>
          <li>
            <WorkItem
              title="THIS IS THE TITLE!"
              shortDesc="This is a short description of the item."
              longDesc="This is a long description of the item. This is a long description of the item. This is a long description of the item."
              image={image01}
              imageAlt="Image Alt"
            />
          </li>
          <li>
            <WorkItem
              title="THIS IS THE TITLE!"
              shortDesc="This is a short description of the item."
              longDesc="This is a long description of the item. This is a long description of the item. This is a long description of the item."
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
