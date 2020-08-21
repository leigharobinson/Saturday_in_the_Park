import React from "react";
import Area from "./Area";
import "./AreaList.css";

const AreaList = (props) => {
  return (
    <>
      <article className="explorerList">
        <h1>THis is the Area List.js </h1>
        <br></br>
        {props.areas.map((area) => (
          <Area
            key={area.id}
            getAttractions={props.getAttractions}
            area={area}
          />
        ))}
      </article>
    </>
  );
};

export default AreaList;
