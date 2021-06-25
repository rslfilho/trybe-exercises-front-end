import { Component } from "react";
import PersonalData from "./PersonalData";

class Form extends Component {
  constructor() {
    super();

    this.getChildState = this.getChildState.bind(this);

    this.state = {};
  }

  getChildState(childState) {
    this.setState((prevState, _props) => ({
      ...prevState,
      ...childState,
    }))
  }

  render() {
    return (
      <form>
        <h1>Formuário de cadastro de currículo</h1>
        <PersonalData getState={this.getChildState} />
      </form>
    );
  }
}

export default Form;
