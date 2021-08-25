import React from "react";

const animalBackground = (animal) => ({
  backgroundImage: `url(./src/img/${animal}.gif`,

  height: "200px",
  backgroundSize: "contain",
  backgroundRepeat: "no-repeat",
  backgroundPosition: "center",
});

export default function Cage({ selectedAnimal }) {
  return <div style={animalBackground(selectedAnimal)}></div>;

}
