import React from "react";
import "../styles/style.css";
import WorkItem from "./workItem.js";

const workList = () => {
  return (
    <WorkItem
      title="THIS IS THE TITLE!"
      shortDesc="This is a short description of the item."
      longDesc="This is a long description of the item. This is a long description of the item. This is a long description of the item."
    />
  );
};
export default workList;
