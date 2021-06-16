import React from "react";

<<<<<<< HEAD
function PlantCard({image, price, name}) {
  return (
    <li className="card">
      <img src={image} alt={"plant name"} />
=======
function PlantCard(props) {
  const {id, name, image = "https://via.placeholder.com/400", price} = props

  return (
    <li className="card">
      <img src={image}
       alt={name} />
>>>>>>> 98521ad (2nd deliverable done)
      <h4>{name}</h4>
      <p>Price: {price}</p>
      {true ? (
        <button className="primary">In Stock</button>
      ) : (
        <button>Out of Stock</button>
      )}
    </li>
  );
}

export default PlantCard;
