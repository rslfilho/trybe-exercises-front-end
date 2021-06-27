import { Component } from "react";
import Input from "./Input";
import Textarea from "./Textarea";

class JobInfo extends Component {
  constructor() {
    super();

    this.handleMouseEnter =this.handleMouseEnter.bind(this);

    this.state = {
      mouseHasEntered: false, 
    }
  }
  
  handleMouseEnter() {
    const { mouseHasEntered } = this.state;

    if (!mouseHasEntered) {
      alert ('Preencha com cuidado esta informação.');
      this.setState({
        mouseHasEntered: true,
      })
    }
  }

  render() {
    const { handleChange, state } = this.props;
    const { resume, office, officeDescription } = state;

    return (
      <fieldset>
        <legend>Dados Profissionais</legend>
        <Textarea 
          textareaName='resume'
          textareaLabel='Resumo do Currículo:'
          textareaValue={resume}
          textareaMaxlength={1000}
          onChangeTextarea={handleChange}
        />
        <Textarea 
          textareaName='office'
          textareaLabel='Cargo:'
          textareaValue={office}
          textareaMaxlength={40}
          onChangeTextarea={handleChange}
          onMouseEnter={this.handleMouseEnter}
        />
        <Input 
          inputName='officeDescription'
          inputLabel='Descrição do cargo:'
          inputValue={officeDescription}
          inputMaxlength={500}
          onChangeInput={handleChange}
        />
      </fieldset>
    );
  }
}

export default JobInfo;
