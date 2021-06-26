import { Component } from "react";
import Input from "./Input";
import Textarea from "./Textarea";

class JobInfo extends Component {
  constructor() {
    super();

    this.handleChange = this.handleChange.bind(this);

    this.state = {
      resume: '',
      office: '',
      officeDescription: '',
    }
  }

  handleChange({ target }) {
    const { getState } = this.props;
    const { name } = target;
    const value = target.type === 'checkbox' ? target.checked : target.value;

    this.setState({
      [name]: value,
    }, () => getState(this.state));
  }
  
  render() {
    const { resume, office, officeDescription } = this.state;

    return (
      <fieldset>
        <legend>Dados Profissionais</legend>
        <Textarea 
          textareaName='resume'
          textareaLabel='Resumo do Currículo:'
          textareaValue={resume}
          textareaMaxlength={1000}
          onChangeTextarea={this.handleChange}
        />
        <Input 
          inputName='office'
          inputLabel='Cargo:'
          inputValue={office}
          inputMaxlength={40}
          onChangeInput={this.handleChange}
        />
        <Input 
          inputName='officeDescription'
          inputLabel='Descrição do cargo:'
          inputValue={officeDescription}
          inputMaxlength={500}
          onChangeInput={this.handleChange}
        />
      </fieldset>
    );
  }
}

export default JobInfo;
