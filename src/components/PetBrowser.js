import React from "react";

import Pet from "./Pet";

function PetBrowser({pets}) {
  //console.log(pets)
  let mapOfPets = pets.map(i => <Pet pet={i} key={i.id}/> )

  return <div className="ui cards">{mapOfPets}</div>;
}

export default PetBrowser;
