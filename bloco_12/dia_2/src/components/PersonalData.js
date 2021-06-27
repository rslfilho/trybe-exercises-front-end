import { Component } from "react";
import Input from "./Input";
import StateSelect from "./Select";

class PersonalData extends Component {
  render() {
    const { handleChange, state } = this.props
    const { nome, email, cpf, adress, city } = state;

    return (
      <fieldset>
        <legend>Dados Pessoais</legend>
        <Input 
          inputName='nome'
          inputLabel='Nome:'
          inputValue={nome}
          inputMaxlength={40}
          onChangeInput={handleChange}
        />
        <Input 
          inputType='email'
          inputName='email'
          inputLabel='Email:'
          inputValue={email}
          inputMaxlength={50}
          onChangeInput={handleChange}
        />
        <Input 
          inputName='cpf'
          inputLabel='CPF:'
          inputValue={cpf}
          inputMaxlength={11}
          onChangeInput={handleChange}
        />
        <Input 
          inputName='adress'
          inputLabel='Endereço:'
          inputValue={adress}
          inputMaxlength={200}
          onChangeInput={handleChange}
        />
        <Input 
          inputName='city'
          inputLabel='Cidade:'
          inputValue={city}
          inputMaxlength={28}
          onChangeInput={handleChange}
        />
        <StateSelect 
          selectName='state'
          onChangeSelect={handleChange} 
        />
        <Input 
          inputType='radio'
          inputName='type'
          inputLabel='Casa:'
          inputValue='Casa'
          onChangeInput={handleChange}
        />
        <Input 
          inputType='radio'
          inputName='type'
          inputLabel='Apartamento:'
          inputValue='Apartamento'
          onChangeInput={handleChange}
        />
      </fieldset>
    )
  }
}

export default PersonalData;