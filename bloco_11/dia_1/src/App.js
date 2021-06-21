import './App.css';

const Task = (value) => {
  return (
    <li>{value}</li>
  );
}

const tasks = ['limpar a casa', 'fazer comida', 'completar exercícios'];

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <ul><h2>Teste</h2>
        { tasks.map((task) => Task(task)) }
        </ul>
      </header>
    </div>
  );
}

export default App;
