import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import ClassComp from './components/ClassComp';
import FunctionComp from './components/FunctionComp';

function App() {
  return (
    <div className="App">
      hey it's me!
      <ClassComp name="Michael" message="hey it's me!"/>
      <FunctionComp name="Mike" message="also still me!"/>
    </div>
  );
}

export default App;
