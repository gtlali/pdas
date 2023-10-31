import React from "react";
import DigitalAssistants from "./DigitalAssistants";
import AnimalsList from "./components/animalsList";
//import { useState } from "react";

//import MyMenu from "./menu";
//import Breadcrumb from "./images/Breadcrumb";

export default function App() {
  //const [count, setCount] = useState(0);
  return (
    <div>
      <div className='block'>
        <DigitalAssistants />

        <AnimalsList />
      </div>
    </div>
  );
}
