import React, { useState, useEffect, useRef } from "react";

const Attraction = (props) => {
  let dialog = useRef();
  const starttime = useRef();
  const [modalIsOpen, setIsOpen] = useState(false);

  const toggleDialog = () => {
    setIsOpen(!modalIsOpen);

    if (modalIsOpen) {
      dialog.current.removeAttribute("open");
    } else {
      dialog.current.setAttribute("open", true);
    }
  };
  const addToItinerary = () => {
    fetch("http://localhost:8000/itineraryitems", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        Authorization: `Token ${localStorage.getItem("kennywood_token")}`,
      },
      body: JSON.stringify({
        attraction_id: props.ride.id,
        atraction_name: props.ride.name,
        starttime: starttime.current.value,
      }),
    })
      .then((response) => response.json())
      .then(() => {
        console.log("Added");
        console.log(props.ride.id);
        console.log(props.ride.name);
        props.history.push("/myitinerary");
      });
    console.log("IS this working?");
  };

  //   const selectCorrectRide = (id, rideId) => {
  //     if (id == rideId) {

  //     }
  //   };
  //   console.log(selectCorrectRide);

  useEffect(() => {
    // dialog = document.querySelector("#dialog--time");

    const handler = (e) => {
      // Close all dialogs when ESC is pressed, and close search field
      if (e.keyCode === 27) {
        if (modalIsOpen) {
          toggleDialog();
        }
      }
    };

    window.addEventListener("keyup", handler);
    return () => window.removeEventListener("keyup", handler);
  });

  return (
    <>
      <dialog ref={dialog} id={props.ride.id} className="dialog--time">
        <label htmlFor="starttime">When do you want to ride?</label>
        <input
          ref={starttime}
          type="text"
          name="starttime"
          autoFocus
          required
        />
        {/* ORIGINAL */}
        {/* <button className="" onClick={addToItinerary}>Add to Itinerary</button> */}

        <button className="leigha-check" onClick={addToItinerary}>
          Add to Itinerary
        </button>

        <button
          style={{
            position: "absolute",
            top: "0.25em",
            right: "0.25em",
          }}
          id="closeBtn"
          onClick={toggleDialog}
        >
          X
        </button>
      </dialog>

      <section className="ride">
        <button className="fakeLink ride__link" onClick={() => toggleDialog()}>
          {props.ride.name}
          {props.ride.id}
        </button>
      </section>
    </>
  );
};

export default Attraction;
