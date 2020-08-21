import React from "react";

const Area = (props) => {
  return (
    <>
      <section className="parkArea">
        <h6>FOUND THE LOOPING LIST of PARKS Area.js</h6>
        <button
          className="fakeLink parkArea__link"
          onClick={() => props.getAttractions(props.area.id)}
        >
          {props.area.name}
        </button>
      </section>
    </>
  );
};

export default Area;
