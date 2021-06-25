import { Component } from "react";
import TypeButton from "./TypeButton";


class TypeButtons extends Component {
  render() {
    const { pokemons } = this.props;
    const pokemonTypes = pokemons.map(({ type }) => type);
    const uniqueTypes = Array.from(new Set(pokemonTypes));

    return (
      <section className="type-buttons">
        {
          uniqueTypes.map((type) => <TypeButton key={type} type={type} />)
        }
      </section>
    );
  }
}

export default TypeButtons;