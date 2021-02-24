/*
Este archivo NO es necesario editar para los test specs
*/

import React, { Component } from "react";
import Exhibit from "./Exhibit";

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      selectedMammal: "Tiger",
      selectedBird: "Eagle",
      selectedFish: "Seahorse",
      mammals: ["Tiger", "Panda", "Pig"],
      birds: ["Eagle", "Flamingo", "Penguin"],
      fish: ["Seahorse", "Octopus", "Stingray"],
    };
  }

  render() {
    const {
      selectedMammal,
      selectedBird,
      selectedFish,
      mammals,
      birds,
      fish,
    } = this.state;
    return (
      <div>
        <h1>Virtual Zoo</h1>
        <div className="clearfix">
          <div className="block">
            <h2>Mammals</h2>
            <Exhibit selectedAnimal={selectedMammal} animals={mammals} />
          </div>
          <div className="block">
            <h2>Birds</h2>
            <Exhibit selectedAnimal={selectedBird} animals={birds} />
          </div>
          <div className="block">
            <h2>Fish</h2>
            <Exhibit selectedAnimal={selectedFish} animals={fish} />
          </div>
        </div>
      </div>
    );
  }
}
