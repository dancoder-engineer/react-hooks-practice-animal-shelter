import React, { useState } from "react";
import PetBrowser from "./PetBrowser";

function Pet({pet}) {
  let [adopted, setAdopted] = useState(pet.isAdopted)
  let gen
  let adoptedPet = <button className="ui disabled button">Already adopted</button>
  let adoptThis = <button className="ui primary button" onClick={setAdopt}>Adopt pet</button>
  console.log(pet.type)
  if (pet.gender === "male") { gen = "♀" }
  else { gen = "♂" }


  function setAdopt() {
    setAdopted(true)
  }

  return (
    <div className="card" data-testid="pet">
      <div className="content">
        <span className="header">
          {gen}
          {pet.name}
        </span>
        <div className="meta">
          <span className="date">PET TYPE</span>
        </div>
        <div className="description">
          <p>Age: {pet.age}</p>
          <p>Weight: {pet.weight}</p>
        </div>
      </div>
      <div className="extra content">
        {adopted ? adoptedPet : adoptThis }
      </div>
    </div>
  );
}

export default Pet;
