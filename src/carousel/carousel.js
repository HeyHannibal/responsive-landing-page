import { useReducer, useState } from "react";

import img1 from "../images/taylor-smith-XeRfuWMvfyY-unsplash.jpg";
import img2 from "../images/john-karlo-mendoza-idzUojjazCg-unsplash.jpg";
import img3 from "../images/chris-knight-vI3m5UnZ0aQ-unsplash.jpg";

const gallery = [img1, img2, img3];

export default function Carousel() {
  const initialState = 0;

  function reducer(state, action) {
    switch (action.type) {
      case "next":
        return state + 1 < gallery.length ? state + 1 : state;
      case "previous":
        return state - 1 >= 0 ? state - 1 : state;
      case "goto":
        return action.value;
    }
  }

  const [currentImg, dispatch] = useReducer(reducer, initialState);

  const renderGallery = gallery.map((image, index) => (
    <div
      style={{ backgroundImage: `url(${image})` }}
      className={`carousel ${
        currentImg === index ? "active" : ""
      } left backgroundImg`}
    ></div>
  ));

  return (
    <div style={{ display: "flex" }} className="imgContainer">
      <div class="galleryContainer" style={{ display: "flex", width: "100%" }}>
        {renderGallery}
      </div>
      <div className="galleryNavigation">
        <button onClick={() => dispatch({ type: "previous" })}>«</button>
        <p id="counter">
          <span>{currentImg + 1}</span><span>/{gallery.length}</span>
        </p>
        <button onClick={() => dispatch({ type: "next" })}>»</button>
      </div>
    </div>
  );
}

//   const galleryNav = gallery.map((image, index) => (
//       <button onClick={() => dispatch({type: 'goto', value: index})}>.</button>
//   ));
