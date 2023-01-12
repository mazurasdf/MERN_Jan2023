import './App.css';
import TestComp from './components/TestComp';

function App() {
  return (
    <div className="App">
      <h1>hey it's me!</h1>

      <TestComp name="Michael"/>
      <TestComp name="John"/>
      <TestComp name="Jane"/>
      <TestComp name="Fred"/>
    </div>
  );
}

export default App;
