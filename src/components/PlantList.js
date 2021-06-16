import React from "react";
import PlantCard from "./PlantCard";

function PlantList({plants}) {
<<<<<<< HEAD
  return (
    <ul className="cards">
      {plants.map((plant) => {
        return(
          <PlantCard
            key={plant.id}
            name = {plant.name}
            image = {plant.image}
            price = {plant.price}
          />
        )
    })}
    </ul>
    )
=======
  const plantsArr = plants.map(plant => {
    return <PlantCard key = {plant.id} {...plant}/>
  })
  return (
    <ul className="cards">
      {plantsArr}
    </ul>
  );
>>>>>>> 98521ad (2nd deliverable done)
}

export default PlantList;
