import logo from './logo.svg';
import './App.css';
import Counter from './components/counter/counter';

function App() {
  return (
    <div className="App">
      

      <Counter initialCount={0}></Counter>

    </div>
  );
}

export default App;
