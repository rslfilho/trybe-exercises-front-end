import { Component } from 'react';

class Pokemon extends Component {
  render(){
    const { pokemon } = this.props;

    return (
      <div className='pokemon-div'>
        <div className='pokemon-info'>
          <p>{pokemon.name}</p>
          <p>{pokemon.type}</p>
          <p>Average weight: {pokemon.averageWeight.value} {pokemon.averageWeight.measurementUnit}</p>
        </div>
        <div className='pokemon-img-div'>
          <img src={pokemon.image} alt={pokemon.name} className='pokemon-img' />
        </div>
      </div>
    );
  };
};

export default Pokemon;