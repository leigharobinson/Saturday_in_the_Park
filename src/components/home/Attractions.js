import React from "react";
import Attraction from "./Attraction";
import "./Attractions.css";

const Attractions = (props) => {
  return (
    <>
      <article className="explorerList">
        <h1>THIS is the Attractions LISt on Attractions.js</h1>
        {props.attractions.map((ride) => (
          <Attraction key={ride.id} ride={ride} {...props} />
        ))}
      </article>
    </>
  );
};

export default Attractions;
