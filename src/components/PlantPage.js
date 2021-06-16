import React, { useEffect, useState } from "react";
import NewPlantForm from "./NewPlantForm";
import PlantList from "./PlantList";
import Search from "./Search";

function PlantPage() {
  const [plants, setPlants] = useState([])

<<<<<<< HEAD
  useEffect(() => {
    fetch('http://localhost:6001/plants')
      .then((res) => res.json())
      .then((plantsArr) => {
        setPlants(plantsArr)
      })
  }, [])
=======
  const addPlant = (newPlant) =>{
    let newPlantArr = [...plants, newPlant]
    setPlants(newPlantArr)
  }

  useEffect(()=> {
    fetch ('http://localhost:6001/plants')
    .then (res => res.json())
    .then (plantData => setPlants(plantData))
  }, [])
  console.log(plants);

>>>>>>> 98521ad (2nd deliverable done)

  return (
    <main>
      <NewPlantForm addPlant = {addPlant} />
      <Search />
<<<<<<< HEAD
      <PlantList
        plants = {plants}
      />
=======
      <PlantList plants = {plants}/>
>>>>>>> 98521ad (2nd deliverable done)
    </main>
  );
}

export default PlantPage;
