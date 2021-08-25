import React, { Component } from "react";
import AnimalSelect from "./AnimalSelect";
import Cage from "./Cage";

export default class Exhibit extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedAnimal: this.props.selectedAnimal,
    };
    this.setAnimal = this.setAnimal.bind(this);
  }

  setAnimal(animal) {
    this.setState({ selectedAnimal: animal });
  }

  render() {
    const { animals } = this.props;
    return (
      <div className="exhibit">
        <AnimalSelect animals={animals} submitAnimal={this.setAnimal} />
        <Cage selectedAnimal={this.state.selectedAnimal} />
      </div>
    );
  }
}
