import { Component } from 'react';
import PropTypes from 'prop-types';

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

Pokemon.propTypes = {
  pokemon: PropTypes.shape({
    name: PropTypes.string,
    type: PropTypes.string,
    averageWeight: PropTypes.shape({
      value: PropTypes.number,
      measurementUnit: PropTypes.string,
    }),
    image: PropTypes.string,
  })
};

export default Pokemon;