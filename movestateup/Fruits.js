import React from "react";

function Fruits({ fruits }) {
  return (
    <div>
       <ul>
        {fruits.map(fruit => (
            <li key={fruit.id}>{fruit.fruitName}</li>
        ))}
       </ul>
    </div>
  );
}

export default Fruits;