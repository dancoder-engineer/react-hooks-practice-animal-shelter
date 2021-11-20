import React, { useState, useEffect } from "react";

import Filters from "./Filters";
import PetBrowser from "./PetBrowser";

function App() {

  const URL = "http://localhost:3001/pets"

  const [allPets, setAllPets] = useState([]);
  const [pets, setPets] = useState([]);
  const [filters, setFilters] = useState({ type: "all" });

  function switchFilter(filter){
    let pet = []
    //console.log(filter)
    setFilters(filter)
    if (filter === "all") { pet = allPets}
    else { pet = allPets.filter(i => i.type === filter) }
    setPets(pet)
  }

  useEffect(() => {
    fetch(URL)
    .then(res => res.json())
    .then(data => {
      setAllPets(data)
      setPets(data)
    })
  },[])

  return (
    <div className="ui container">
      <header>
        <h1 className="ui dividing header">React Animal Shelter</h1>
      </header>
      <div className="ui container">
        <div className="ui grid">
          <div className="four wide column">
            <Filters onChangeType={switchFilter}/>
          </div>
          <div className="twelve wide column">
            <PetBrowser pets={pets}/>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
