import { Component } from "react";
import Input from "./Input";

class Form extends Component {
  constructor() {
    super();

    this.handleChange = this.handleChange.bind(this);

    this.state = {
      nome: '',
      email: '',
      cpf: '',
    }
  }

  handleChange({ target }) {
    const { name } = target;
    const value = target.type === 'checkbox' ? target.checked : target.value;

    this.setState({
      [name]: value,
    });
  }

  render() {
    const { nome, email, cpf } = this.state;

    return (
      <form>
        <h1>Formuário de cadastro de currículo</h1>
        <fieldset>
          <Input 
            inputName='nome'
            inputLabel='Nome:'
            inputValue={nome.toUpperCase()}
            inputMaxlength={40}
            onChangeInput={this.handleChange}
          />
          <Input 
            inputType='email'
            inputName='email'
            inputLabel='Email:'
            inputValue={email}
            inputMaxlength={50}
            onChangeInput={this.handleChange}
          />
          <Input 
            inputName='cpf'
            inputLabel='CPF:'
            inputValue={cpf}
            inputMaxlength={11}
            onChangeInput={this.handleChange}
          />
        </fieldset>
      </form>
    );
  }
}

export default Form;
