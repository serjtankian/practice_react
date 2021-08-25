import React, { Component } from "react";

export default function AnimalSelect({ submitAnimal, animals }) {
  return (
    <form>
      <section>
        <label>Select an Animal:</label>
        <select onChange={({ target }) => submitAnimal(target.value)}>
          {animals.map((animal) => (
            <option key={animal} value={animal}>
              {animal}
            </option>
          ))}
        </select>
      </section>
    </form>
  );
}
