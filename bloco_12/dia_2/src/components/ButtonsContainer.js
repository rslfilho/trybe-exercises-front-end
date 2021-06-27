import { Component } from "react";
import Button from "./Button";

class ButtonsContainer extends Component {
  render() {
    const { clearForm } = this.props;

    return (
      <section>
        <Button 
          buttonType='submit'
          buttonText='Enviar'
        />
        <Button 
          buttonType='reset'
          buttonText='Limpar'
          onClickButton={clearForm}
        />
      </section>
    );
  }
}

export default ButtonsContainer;
