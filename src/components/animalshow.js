import "./animalshow.css";
import { useState } from "react";
import bird from "../images/svg/bird.svg";
import cat from "../images/svg/cat.svg";
import cow from "../images/svg/cow.svg";
import dog from "../images/svg/dog.svg";
import gator from "../images/svg/gator.svg";
import heart from "../images/svg/heart.svg";
import horse from "../images/svg/horse.svg";

export default function AnimalShow({ type }) {
  const svgMap = { bird, cat, cow, dog, gator, horse }; // this is similar to bird:bird, cat:cat, cow:cow ... etc

  const [clicks, setClicks] = useState(0);
  const handleImgClick = () => {
    setClicks(clicks + 1);
  };
  //return <div style={styles}> {type} </div>;
  return (
    <div className='animal-show' onClick={handleImgClick}>
      <img className='animal' alt='animal' src={svgMap[type]} />
      <img
        className='heart'
        alt='hearts'
        src={heart}
        style={{ width: 10 + 2 * clicks + "px" }}
      />
    </div>
  );
}
