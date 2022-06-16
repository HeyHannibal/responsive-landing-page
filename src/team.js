import { useState } from "react";
import team from "./images/team.jpg";
import "./barbers.css";
console.log(team);
 const lorem = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab optio animi laborum, nostrum harum ratione perferendis sunt reprehenderit porro voluptate obcaecati consequatur vero expedita pariatur facere excepturi quas quibusdam natus!'
const barbers = [
  {
    name: "Hector Salamanca",
    position: "Top bloke",
    about: lorem,
    pic: team,
  },
  {
    name: "Slim shady",
    position: "Top bloke",
    about: lorem,
    pic: team,
  },
  {
    name: "Lester Freamon",
    position: "Top bloke",
    about: lorem,
    pic: team,
  },
  {
    name: "my name is",
    position: "Top bloke",
    about: lorem,
    pic: team,
  },
];

export default function Team() {
  const [focus, setFocus] = useState(0);

  const barbersPics = barbers.map((item, index) => (
    <div
      className="profile"
      style={{ opacity: focus === index ? "1" : "0.5" }}
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
      // style={{
      //   transform: `translateX(${focus === index ? "0" : "-1500px"})`,
      // }}
      className={`barberInfo ${index === focus ? "inFocus" : ""}`}
    >
      <h4>{barbers[focus].name}</h4>
      <p>{barbers[focus].about}</p>
    </div>
  ));

  return (
    <section id="ourTeam">
      <div id="profileContainer">{barbersPics}</div>
      <div id="infoContainer">{barberInfo}</div>
    </section>
  );
}
