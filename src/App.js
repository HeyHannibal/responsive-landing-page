import "./App.css";
import Carousel from "./carousel/carousel";
import Gallery from "./carousel/gallery";

import PriceList from "./priceList";
import Nav from "./nav";
import { useRef, useState, useEffect } from "react";
import VK from "./images/icons/VK_Monochrome_Compact_Logo.png";

import Team from "./team";
function App() {
  return (
    <div className="App">
      <Nav></Nav>
      <header>
        <div className="mainContent">
          <div id="title">
            <h1>МУСТАШ</h1>
            <h1>
              <span style={{ opacity: "0" }}>му</span>Barbershop
            </h1>
          </div>
          <div id="headerBtns">
            <button className="headerBtn">
              <span>Запись</span>
              <span className="material-symbols-outlined">arrow_outward</span>
            </button>
            <a href="#priceList">
              <button className="headerBtn">
                <span>Услуги</span>
                <span className="material-symbols-outlined">arrow_outward</span>
              </button>
            </a>
          </div>
        </div>
        <div id="slideOut"></div>
        <div className="right backgroundImg"></div>
      </header>
      <main>
        <section id="portfolio">
          <h2>Наши Работы</h2>
          <Gallery />
        </section>
        <Team></Team>
        <section id="priceList">
          <h2>Услуги</h2>
          <PriceList />
        </section>
        <section id="aboutUs">
          {/* <Carousel /> */}
          <h2>О нас</h2>

          <div className="textbox">
            <h4>"Lorem ipsum dolor sit, amet consectetur adipisicing elit."</h4>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Id aut
              culpa quas illo hic beatae facilis vitae iste ratione, amet
              aspernatur praesentium quae eaque laudantium consequuntur iusto
              labore maxime tempore! Dignissimos ducimus, architecto inventore
              quas soluta necessitatibus eligendi iste officiis. Itaque esse
              consequuntur veritatis in consectetur, eligendi asperiores neque
              ipsum aperiam perferendis ipsa repudiandae laborum eveniet maxime
              animi, blanditiis dolores!
            </p>
          </div>
        </section>
      </main>
      <footer>
        <div id="map" style={{ width: "90%", height: "400px" }}></div>
        <div id="contacts">
          <h5>Контакты</h5>
          <address>
            <a className="phone" href="tel:555-555-5555">
              +7 914 412-41-94
            </a>
            <p>Малая Бухарестская 12, Санкт-Петербург</p>
          </address>
          <a>
            <img style={{ transform: "scale(0.4)" }} src={VK}></img>
          </a>
        </div>
      </footer>
    </div>
  );
}

export default App;
