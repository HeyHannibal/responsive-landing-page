import Gallery from "./gallery";
import backgroundImg from "./../public/images/webp/allef-vinicius-IvQeAVeJULw-unsplash.webp";
import aboutImg from "./../public/images/webp/about.webp";
import PriceList from "./priceList";
import Nav from "./nav";
import Team from "./team";
const lorem =
  "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ati consequatur vero expedita pariatur facere excepturi quas quibusdam natus! Dolorum, odio sed, minima, debitis praesentium autem est animi dolorem sit quod nobis laborum temporibus aliquam quam deleniti nemo veniam quibusdam dolores ad cum aliquid sapiente! Praesentium culpa magnam dolor" +
  "Quibusdam atque voluptates alias voluptatem inventore, voluptatum veniam dolor mollitia tempora itaque voluptate cum nemo numquam consectetur quis quaerat rem unde ullam aperiam iste. Voluptatibus fugit corrupti ex consequuntur asperiores?" +
  "Provident officiis porro a architecto! Maiores asperiores obcaecati, dolore ducimus fuga repudiandae consequuntur explicabo itaque ut ipsum delectus, non numquam expedita quod dicta, alias laudantium eaque! Dolor, ipsa tenetur. Omnis";

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
            </button>
            <a href="#priceList">
              <button className="headerBtn">
                <span>Услуги</span>
              </button>
            </a>
          </div>
        </div>
        <div id="slideOut"></div>
        <div
          style={{ backgroundImage: `url(${backgroundImg.src})` }}
          className="right backgroundImg"
        ></div>
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
          <h2>О нас</h2>
          <div class="content">
            <div className="textbox">
              <h4>{lorem.slice(0, 50)}</h4>
              <p>{lorem.slice(0, 350)}</p>
              <p>{lorem.slice(60, 200)}</p>
            </div>
            <img src={aboutImg.src}></img>
          </div>
        </section>
      </main>
      <footer>
        <div id="map"></div>
        <address>
          <h5>Контакты</h5>
          <a className="phone" href="tel:555-555-5555">
            +7 914 412-41-94
          </a>
          <p>Малая Бухарестская 12, Санкт-Петербург</p>
          <a>
            {/* <img style={{ transform: "scale(0.4)" }} src={VK}></img> */}
          </a>
        </address>
      </footer>
    </div>
  );
}
export default App;
