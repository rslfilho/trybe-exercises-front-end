import './App.css';
import TypeButtons from './components/TypeButtons';
import Pokemon from './components/Pokemon';
import data from './data';

function App() {
  return (
    <main>
      <h1>Pokedex</h1>
      <Pokemon pokemon={data[0]}/>
      <TypeButtons pokemons={data}/>
    </main>
  );
}

export default App;
