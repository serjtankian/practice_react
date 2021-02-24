import React from "react";

const animalBackground = (animal) => ({
  backgroundImage: `url(./src/img/${animal}.gif`,
  height: "200px",
});

export default function Cage({ selectedAnimal }) {}
