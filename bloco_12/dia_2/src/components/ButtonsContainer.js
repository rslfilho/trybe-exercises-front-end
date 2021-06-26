import { Component } from "react";
import Button from "./Button";

class ButtonsContainer extends Component {
  render() {
    return (
      <section>
        <Button 
          buttonType='submit'
          buttonText='Enviar'
        />
        <Button 
          buttonText='Limpar'
        />
      </section>
    );
  }
}

export default ButtonsContainer;
