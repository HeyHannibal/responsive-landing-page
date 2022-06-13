import "./App.css";
import Carousel from "./carousel/carousel";
import Gallery from "./carousel/carousel";

import PriceList from "./priceList";
import Nav from "./nav";
import { useRef, useState, useEffect } from "react";

function App() {
  return (
    <div className="App">
      <Nav></Nav>
      <header>
        {/* <button style={{ position: "fixed" }}>AAAAAAAAa</button> */}
        <div className="mainContent">
          <h1>
            МУСТАШ <br></br>&nbsp;&nbsp;Barbershop
          </h1>
          <div id="headerBtns">
            <button className="headerBtn">
              Запись
              <span className="material-symbols-outlined">arrow_outward</span>
            </button>
            <a href="#priceList">
              <button className="headerBtn">
                Услуги{" "}
                <span className="material-symbols-outlined">arrow_outward</span>
              </button>
            </a>
          </div>
        </div>
        <div id="slideOut"></div>
        <div className="right backgroundImg"></div>
      </header>
      <main>
        <section id="aboutUs">
          {/* <Carousel /> */}
          <div className="textbox">
            <h2>О нас</h2>
            <h4>"Lorem ipsum dolor sit, amet consectetur adipisicing elit."</h4>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Perspiciatis consequatur doloremque pariatur, reprehenderit
              tempore quo dolorum possimus animi sit sequi cupiditate, numquam
              soluta, odio repudiandae eligendi natus quisquam. Ipsa,
              reiciendis. Id
            </p>
          </div>
        </section>
        <section id="ourTeam">
          <div className="profile"></div>
          <div className="profile"></div>
          <div className="profile"></div>
        </section>
        <section id="priceList">
          <h2>УСЛУГИ</h2>
          <PriceList />
        </section>
        <section id='portfolio'>
          <Gallery/>
        </section>
      </main>
      <footer></footer>
    </div>
  );
}

export default App;
