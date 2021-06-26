import { Component } from 'react';
import './App.css';
import Form from './components/Form';

class App extends Component {
  constructor() {
    super();

    this.onSubmitForm = this.onSubmitForm.bind(this);
    this.getChildState = this.getChildState.bind(this);

    this.state ={};
  }

  onSubmitForm(e) {
    e.preventDefault();
    alert ('Formulário Enviado!');
  }

  getChildState(childState) {
    this.setState((prevState, _props) => ({
      ...prevState,
      ...childState,
    }))
  }

  render() {
    return (
      <div className="App">
       <Form onSubmitForm={this.onSubmitForm} getState={this.getChildState} />
      </div>
    );
  }
}

export default App;
