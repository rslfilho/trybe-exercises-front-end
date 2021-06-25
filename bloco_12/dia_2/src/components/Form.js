import { Component } from "react";
import PersonalData from "./PersonalData";

class Form extends Component {
  render() {
    return (
      <form>
        <h1>Formuário de cadastro de currículo</h1>
        <PersonalData />
      </form>
    );
  }
}

export default Form;
