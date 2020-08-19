import React from "react";

const Area = (props) => {
  return (
    <>
      Console.log("FOUND THE LOOPING LIST of PARKS")
      <section className="parkArea">
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
