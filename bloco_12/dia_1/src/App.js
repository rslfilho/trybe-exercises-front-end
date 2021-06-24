import { Component } from 'react';
import './App.css';
import Pokemon from './components/Pokemon';
import TypeButtons from './components/TypeButtons';
import NextButton from './components/NextButton';
import data from './data';


  
class App extends Component {
  constructor() {
    super();

    this.nextPokemon = this.nextPokemon.bind(this);

    this.state = {
      indexPokemon: 0,
    }
  }
  
  nextPokemon() {
    this.setState((prevState, _props) => {
      if (prevState.indexPokemon < 8) {
        return {
          indexPokemon: prevState.indexPokemon + 1,
        }
      } else {
        return {
          indexPokemon: 0,
        }
      }
    })
  }

  render() {
    return (
    <main className="main-container">
      <h1>Pokedex</h1>
      <Pokemon pokemon={data[this.state.indexPokemon]} />
      <TypeButtons pokemons={data} />
      <NextButton onClick={this.nextPokemon} />
    </main>
    )
  }
}

export default App;
