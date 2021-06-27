import { Component } from 'react';
import './App.css';
import Curriculum from './components/Curriculum';
import Form from './components/Form';

class App extends Component {
  constructor() {
    super();

    this.onSubmitForm = this.onSubmitForm.bind(this);
    this.getChildState = this.getChildState.bind(this);

    this.state ={
      form: {},
    };
  }

  onSubmitForm(e) {
    e.preventDefault();
    alert ('Formulário Enviado!');
  }

  getChildState(childState) {
    this.setState((prevState, _props) => ({
      form: {
        ...prevState.form,
        ...childState,
      },
    }))
  }

  render() {
    return (
      <div className="App">
        <h1>Formuário de cadastro de currículo</h1>
        <Curriculum />
        <Form onSubmitForm={this.onSubmitForm} getState={this.getChildState} />
      </div>
    );
  }
}

export default App;
