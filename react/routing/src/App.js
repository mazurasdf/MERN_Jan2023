import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import {Routes, Route} from "react-router-dom";
import Main from './views/Main';
import Second from './views/Second';
import NavBar from './components/NavBar';
import Repeater from './views/Repeater';

function App() {
  return (
    <div className="App">
      <NavBar/>

      <Routes>
        <Route path="/" element={<Main/>}/>
        <Route path="/second" element={<Second/>}/>
        <Route path="/repeater/:phrase" element={<Repeater/>}/>
      </Routes>
    </div>
  );
}

export default App;
