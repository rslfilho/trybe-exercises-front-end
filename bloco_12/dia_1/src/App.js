import { Component } from 'react';
import './App.css';
import Pokemon from './components/Pokemon';
import TypeButtons from './components/TypeButtons';
import NextButton from './components/NextButton';
import data from './data';
  
class App extends Component {
  constructor() {
    super();

    const pokemonTypes = data
      .map(({ type }) => type)
      .filter((type, index, array) => array.indexOf(type) === index)

    pokemonTypes.unshift('All');

    this.types = pokemonTypes;

    this.nextPokemon = this.nextPokemon.bind(this);
    this.filterData = this.filterData.bind(this);
    this.setType = this.setType.bind(this);
    this.isDisable = this.isDisable.bind(this);

    this.state = {
      indexPokemon: 0,
      filteredData: data,
      type: 'All',
      nextDisable: false,
    }
  }
  
  nextPokemon() {
    this.setState((prevState, _props) => {
      if (prevState.indexPokemon < this.state.filteredData.length - 1) {
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

  isDisable() {
    if(this.state.filteredData.length <= 1) {
      this.setState({
        nextDisable: true,
      })
    } else {
      this.setState({
        nextDisable: false,
      })
    }
  }

  filterData() {
    if (this.state.type !== 'All') {
      this.setState({
        filteredData: data.filter(({ type }) => type === this.state.type),
        indexPokemon: 0,
      }, this.isDisable)
    } else {
      this.setState({
        filteredData: data,
      }, this.isDisable)
    }
  }

  setType(type) {
    this.setState({
      type: type,
    }, () => this.filterData())
  }

  render() {
    const { filteredData, indexPokemon, nextDisable }= this.state;
    
    return (
    <main className="main-container">
      <h1>Pokedex</h1>
      <Pokemon pokemon={filteredData[indexPokemon]} />
      <TypeButtons types={this.types} onClick={this.setType} />
      <NextButton onClick={this.nextPokemon} isDisable={nextDisable} />
    </main>
    )
  }
}

export default App;
