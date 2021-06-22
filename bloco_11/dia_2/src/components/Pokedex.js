import { Component } from 'react';
import pokemons from '../data';
import Pokemon from './Pokemon';

class Pokedex extends Component {
  render(){
    return (
      <section className='pokemon-container'>
      {
        pokemons.map((pokemon) => <Pokemon key={pokemon.id} pokemon={pokemon}/>)
      }
      </section>
    );
  };
};

export default Pokedex;