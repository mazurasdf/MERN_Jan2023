import './App.css';
import Box from './components/Box';

function App() {
  const doThing = (num) => {
    for(let i = 0; i < num; i++){
      console.log("you pressed the div!!!!");
    }
  }

  return (
    <>
      <Box name="Michael" invert={false}/>
      <Box name="Jacob" invert={true}/>
      <Box name="Max" invert={false}/>
      <Box name="Adam" invert={true}/>
      <Box name="Michael Mazur" invert={false}/>

      {/* <div onClick={()=>{doThing(7)}} className="App">
        <marquee><h1>weeeeeeeeeeeeeeee!!</h1></marquee>
      </div>
      <h1 onMouseOver={()=>{console.log("you are moving the mous over the h1!!")}}>
        hello there!
      </h1> */}
    </>
  );
}

export default App;