import { Component } from "react";
import Input from "./Input";
import Textarea from "./Textarea";

class JobInfo extends Component {
  constructor() {
    super();

    this.handleChange = this.handleChange.bind(this);
    this.handleMouseEnter =this.handleMouseEnter.bind(this);

    this.state = {
      resume: '',
      office: '',
      officeDescription: '',
      mouseHasEntered: false, 
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
  
  handleMouseEnter() {
    const { mouseHasEntered } = this.state;
    const { getState } = this.props;

    if (!mouseHasEntered) {
      alert ('Preencha com cuidado esta informação.');
      this.setState({
        mouseHasEntered: true,
      }, () => getState(this.state))
    }
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
        <Textarea 
          textareaName='office'
          textareaLabel='Cargo:'
          textareaValue={office}
          textareaMaxlength={40}
          onChangeTextarea={this.handleChange}
          onMouseEnter={this.handleMouseEnter}
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
