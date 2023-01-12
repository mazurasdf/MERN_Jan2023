import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Row from './components/Row';
import Frame from './components/Frame';

function App() {
  return (
    <div className="App">
      <Frame>
        <Row/>
        <Row/>
        <Row/>
        <Row/>
        <Row/>
        <Row/>
        <Row/>
        <Row/>
        <Row/>
        <Row/>
      </Frame>
    </div>
  );
}

export default App;
