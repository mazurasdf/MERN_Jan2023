import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react';
import './App.css';
import PokeCard from './components/PokeCard';

function App() {
  const [pokeList, setPokeList] = useState(["pikachu","dragonair", "gyarados", "regigigas"]);
  const [form,setForm] = useState("");

  const onSubmitHandler = (event) => {
    event.preventDefault();
    // console.log(form);
    setPokeList([form,...pokeList]);
  }

  return (
    <div className="App">
      <form onSubmit={onSubmitHandler}>
        <input className='form-control w-25 mx-auto d-block my-2' type="text" onChange={(event)=>setForm(event.target.value)}/>
        <button type="submit" className='btn btn-primary d-block mx-auto my-2'>add to team</button>
      </form>

      <div className='w-100 d-flex justify-content-around flex-wrap mt-3'>
        {
          pokeList.map((name,i)=>{
            return <PokeCard name={name} key={i}/>
          })
        }
      </div>
    </div>
  );
}

export default App;
