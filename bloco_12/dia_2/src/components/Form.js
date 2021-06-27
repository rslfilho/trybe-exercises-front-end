import { Component } from "react";
import ButtonsContainer from "./ButtonsContainer";
import JobInfo from "./JobInfo";
import PersonalData from "./PersonalData";

class Form extends Component {
  constructor() {
    super();

    this.clearForm = this.clearForm.bind(this);
    this.handleChange = this.handleChange.bind(this);

    this.state = {
      nome: '',
      email: '',
      cpf: '',
      adress: '',
      city: '',
      state: 'AC',
      type: 'casa',
      resume: '',
      office: '',
      officeDescription: '',
    }
  }

  handleChange({ target }) {
    const { getState } = this.props;
    const { name } = target;
    const value = target.type === 'checkbox' ? target.checked : target.value;

    if (name === 'nome') {
      this.setState({
        [name]: value.toUpperCase(),
      }, () => getState(this.state));
    } else {
      this.setState({
        [name]: value,
      }, () => getState(this.state));
    }
  }

  clearForm() {
    const { hideDiv } = this.props;

    this.setState({
      nome: '',
      email: '',
      cpf: '',
      adress: '',
      city: '',
      state: 'AC',
      type: '',
      resume: '',
      office: '',
      officeDescription: '',
    }, () => {
      hideDiv();
    })
  }

  render() {
    const { onSubmitForm } = this.props;

    return (
      <form onSubmit={onSubmitForm}>
        <PersonalData handleChange={this.handleChange} state={this.state} />
        <JobInfo handleChange={this.handleChange} state={this.state} />
        <ButtonsContainer clearForm={this.clearForm} />
      </form>
    );
  }
}

export default Form;
