import { useReducer, useState } from "react";

import img1 from "./../public/images/webp/work.webp";
const gallery = [img1.src, img1.src, img1.src];

export default function Gallery() {
  const initialState = 0;
  function reducer(state, action) {
    switch (action.type) {
      case "next":
        return state + 1 < gallery.length ? state + 1 : 0;
      case "previous":
        return state - 1 >= 0 ? state - 1 : gallery.length - 1;
      case "goto":
        return action.value;
    }
  }

  const [currentImg, dispatch] = useReducer(reducer, initialState);

  function calcOffset(arr, value) {
    const offsets = arr.map((element, index, array) => {
      if (index === value) return 0;
      if (index !== value) return (index - value) * 100;
    });
    return offsets;
  }

  const offsets = calcOffset(gallery, currentImg);
  const renderGallery = gallery.map((image, index, array) => {
    return (
      <div
        key={index + image}
        style={{
          transform: `translateX(${offsets[index]}%)`,
        }}
        className={`carousel ${
          currentImg === index ? "" : "noFocus"
        } portfolio imgContainer`}
      >
        <div style={{ backgroundImage: `url(${image})` }}></div>
      </div>
    );
  });

  const [touchStartPosition, setTouchStartPosition] = useState(0);
  const [blockTouch, setBlockTouch] = useState(false);
  function swipe(e) {
    console.log(e.touches[0].clientX, touchStartPosition);
    if (e.touches[0].clientX > touchStartPosition && !blockTouch) {
      dispatch({ type: "previous" });
      setBlockTouch(true);
    }

    if (e.touches[0].clientX < touchStartPosition && !blockTouch) {
      dispatch({ type: "next" });
      setBlockTouch(true);
    }
  }

  const unblockTouch = () => setBlockTouch(false);

  return (
    <div
      className="galleryContainer portfolio"
      onTouchStart={(e) => setTouchStartPosition(e.touches[0].clientX)}
      onTouchMove={swipe}
      onTouchEnd={unblockTouch}
    >
      <span className="galleryDecoration"></span>
      {renderGallery}
      <span className="galleryDecoration"></span>
      <div className="galleryNavigation">
        <button onClick={() => dispatch({ type: "previous" })}>«</button>

        <p id="counter">
          <span>{currentImg + 1}</span>

          <span>/{gallery.length}</span>
        </p>

        <button onClick={() => dispatch({ type: "next" })}>»</button>
      </div>
    </div>
  );
}
