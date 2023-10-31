import "./animalslist.css";
import React from "react";
import { useState } from "react";
import AnimalShow from "./animalshow";

export default function AnimalsList() {
  //  const [count, setCount] = useState(0); <div>No.of Animals: {count} </div>
  const [animals, setAnimals] = useState([]); // useState to be set with default empty array

  function getRandomAnimal() {
    const animals = [
      "bird",
      "cat",
      "cow",
      "dog",
      "gator",
      "horse",
      "monkey",
      "hippopotomous",
    ];
    return animals[Math.floor(Math.random() * animals.length)];
  }

  //console.log(getRandomAnimal());
  const renderedAnimals = animals.map((animal, index) => {
    // Some styling for the items

    console.log("animalGot:", animal, "Index :", index);
    return <AnimalShow type={animal} key={index} />;
  });

  const handleClick = () => {
    setAnimals([...animals, getRandomAnimal()]);
    console.log("add animals", animals);
  };
  return (
    <div>
      <div className='box'>
        <div className='my-box'>
          <button className='button' onClick={handleClick}>
            Add Animal
          </button>
          <div className='animal-list'> {renderedAnimals}</div>
        </div>
      </div>
    </div>
  );
}
