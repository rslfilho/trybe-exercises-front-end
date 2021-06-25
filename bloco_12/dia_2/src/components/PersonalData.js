import { Component } from "react";
import Input from "./Input";
import StateSelect from "./Select";

class PersonalData extends Component {
  constructor() {
    super();

    this.handleChange = this.handleChange.bind(this);

    this.state = {
      nome: '',
      email: '',
      cpf: '',
      adress: '',
      city: '',
      state: 'AC',
      type: 'casa',
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
    const { nome, email, cpf, adress, city } = this.state;

    return (
      <fieldset>
        <legend>Dados Pessoais</legend>
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
        <Input 
          inputName='adress'
          inputLabel='Endereço:'
          inputValue={adress}
          inputMaxlength={200}
          onChangeInput={this.handleChange}
        />
        <Input 
          inputName='city'
          inputLabel='Cidade:'
          inputValue={city}
          inputMaxlength={28}
          onChangeInput={this.handleChange}
        />
        <StateSelect 
          selectName='state'
          onChangeSelect={this.handleChange} 
        />
        <Input 
          inputType='radio'
          inputName='type'
          inputLabel='Casa:'
          inputValue='Casa'
          onChangeInput={this.handleChange}
        />
        <Input 
          inputType='radio'
          inputName='type'
          inputLabel='Apartamento:'
          inputValue='Apartamento'
          onChangeInput={this.handleChange}
        />
      </fieldset>
    )
  }
}

export default PersonalData;