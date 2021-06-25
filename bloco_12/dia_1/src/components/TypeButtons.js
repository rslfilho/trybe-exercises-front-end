import { Component } from "react";
import TypeButton from "./TypeButton";


class TypeButtons extends Component {
  render() {
    const { types, onClick } = this.props;

    return (
      <section className="type-buttons">
        {
          types.map((type) => <TypeButton key={type} type={type} onClick={() => onClick(type)} />)
        }
      </section>
    );
  }
}

export default TypeButtons;