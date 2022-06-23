import { useState } from "react";
import team from "./../public/images/webp/team.webp";
const lorem =
  "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab optio animi laborum, nostrum harum ratione perferendis sunt reprehenderit porro voluptate obcaecati consequatur vero expedita pariatur facere excepturi quas quibusdam natus!";
const barbers = [
  {
    name: "Hector Salamanca",
    position: "Top bloke",
    about: lorem,
    pic: team,
    link: "#",
  },
  {
    name: "Slim shady",
    position: "Top bloke",
    about: lorem,
    pic: team,
    link: "#",
  },
  {
    name: "Lester Freamon",
    position: "Top bloke",
    about: lorem,
    pic: team,
    link: "#",
  },
  {
    name: "my name is",
    position: "Top bloke",
    about: lorem,
    pic: team,
    link: "#",
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
      key={index + item.src}
    >
      <div className="profileImgContainer">
        <div
          style={{ backgroundImage: `url(${item.pic.src})` }}
          className="img"
        ></div>
      </div>
      <p>{item.name}</p>
      <p>{item.position}</p>
    </div>
  ));

  const barberInfo = barbers.slice().map((item, index) => (
    <div
      className={`barberInfo ${index === focus ? "inFocus" : ""} `}
      onMouseEnter={() => setFocus(index)}
      key={index + item.src}
    >
      <div className="profileImgContainer">
        <div
          style={{ backgroundImage: `url(${item.pic.src})` }}
          className="img"
        ></div>
      </div>
      <div
        style={{ backgroundImage: `url(${item.pic.src})` }}
        className="img"
      ></div>
      <span
        onClick={() => setFocus(false)}
        className="X material-symbols-outlined"
      >
&#215;

      </span>
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
      <div id="teamDisplay">
        <div id="profileContainer">{barbersPics}</div>
        {barberInfo}
      </div>
    </section>
  );
}
//onMouseLeave={() => setFocus(false)}
