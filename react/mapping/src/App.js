import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react';
import './App.css';
import Album from './components/Album';
import Form from './components/Form';

function App() {
  const [albums,setAlbums] = useState([
    {imgURL:"https://upload.wikimedia.org/wikipedia/en/d/d1/Plasticbeach452.jpg",title:"Plastic Beach",artist:"Gorillaz",year:"2010"},
    {imgURL:"https://upload.wikimedia.org/wikipedia/en/3/3b/Dark_Side_of_the_Moon.png",title:"Dark Side of the Moon",artist:"Pink Floyd",year:"1973"},
    {imgURL:"https://upload.wikimedia.org/wikipedia/en/d/d1/Plasticbeach452.jpg",title:"Plastic Beach",artist:"Gorillaz",year:"2010"},
    {imgURL:"https://upload.wikimedia.org/wikipedia/en/3/3b/Dark_Side_of_the_Moon.png",title:"Dark Side of the Moon",artist:"Pink Floyd",year:"1973"}
  ]);

  return (
    <div className="App">
      <Form albums={albums} setAlbums={setAlbums}/>
      <div className='w-100 d-flex justify-content-around flex-wrap'>

        {
          albums.map((item,i)=>{
            return <Album key={i} imgURL={item.imgURL} title={item.title} artist={item.artist} year={item.year}/>
          })
        }
      </div>
    </div>
  );
}

export default App;
