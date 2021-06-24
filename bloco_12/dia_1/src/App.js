import './App.css';
import PokeButton from './components/PokeButtons';
import Pokemon from './components/Pokemon';
import data from './data';

function App() {
  return (
    <main>
      <h1>Pokedex</h1>
      <Pokemon pokemon={data[0]}/>
      <PokeButton />
    </main>
  );
}

export default App;
