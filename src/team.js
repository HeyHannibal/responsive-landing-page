import { useState } from "react";
import team from "./images/team.jpg";
import "./barbers.css";
const lorem =
  "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab optio animi laborum, nostrum harum ratione perferendis sunt reprehenderit porro voluptate obcaecati consequatur vero expedita pariatur facere excepturi quas quibusdam natus!";

const barbers = [
  {
    name: "Hector Salamanca",
    position: "Top bloke",
    about: lorem,
    pic: team,
    link:"#"
  },
  {
    name: "Slim shady",
    position: "Top bloke",
    about: lorem,
    pic: team,
    link:"#"
  },
  {
    name: "Lester Freamon",
    position: "Top bloke",
    about: lorem,
    pic: team,
    link:"#"
  },
  {
    name: "my name is",
    position: "Top bloke",
    about: lorem,
    pic: team,
    link:"#"
  },
];

export default function Team() {
  const [focus, setFocus] = useState(0);
  const barbersPics = barbers.map((item, index) => (
    <div
      className="profile"
      style={{
        opacity: focus !== false ? (focus === index ? "1" : "0.5") : "1",
      }}
      onClick={() => setFocus(index)}
    >
      <div class="profileImgContainer">
        <div
          style={{ backgroundImage: `url(${item.pic})` }}
          className="img"
        ></div>
      </div>
      <p>{item.name}</p>
      <p>{item.position}</p>
    </div>
  ));

  const barberInfo = barbers.map((item, index) => (
    <div
      className={`barberInfo ${index === focus ? "inFocus" : ""} `}
      onMouseEnter={() => setFocus(index)}
    >
      <h4>{barbers[index].name}</h4>
      <p>{barbers[index].about}</p>
      <a className="teamLink" href="https://www.yclients.com/en">
        <button className="teamBtn">
                <span>записаться</span>
        </button>
      </a>
    </div>
  ));

  return (
    <section id="ourTeam">
      <h2>Команда</h2>
      <div id="teamDisplay" onMouseLeave={() => setFocus(false)}>
        <div id="profileContainer">
          {barbersPics} <div id="standin"></div>
        </div>
        <div id="infoContainer">
          {barberInfo}
          <div className={`barberInfo ${focus === false ? "inFocus" : ""}`}>
            <h4>About our team</h4>
            <p>{lorem.slice(0, 100)}</p>
            
          </div>
        </div>
      </div>
    </section>
  );
}