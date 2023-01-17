import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react';
import './App.css';
import Album from './components/Album';
import Form from './components/Form';

function App() {
  
  const [albums,setAlbums] = useState([
    {imgURL:"https://upload.wikimedia.org/wikipedia/en/d/d1/Plasticbeach452.jpg",title:"Plastic Beach",artist:"Gorillaz",year:"2010", score:0},
    {imgURL:"https://upload.wikimedia.org/wikipedia/en/3/3b/Dark_Side_of_the_Moon.png",title:"Dark Side of the Moon",artist:"Pink Floyd",year:"1973", score:0},
    {imgURL:"https://upload.wikimedia.org/wikipedia/en/d/d1/Plasticbeach452.jpg",title:"Plastic Beach",artist:"Gorillaz",year:"2010", score:0},
    {imgURL:"https://upload.wikimedia.org/wikipedia/en/3/3b/Dark_Side_of_the_Moon.png",title:"Dark Side of the Moon",artist:"Pink Floyd",year:"1973", score:0}
  ]);

  const onDeleteHandler = (index) => {
    console.log(`trying to delete album #${index}`);

    if(window.confirm("are you sure you want to delete that album?")){
      albums.splice(index,1);
      setAlbums([...albums]);
    }
  }

  const onLikeHandler = (index, amount) => {
    console.log(`add a like to #${index}`);

    albums[index].score += amount;
    if(albums[index].score < 0){
      albums[index].score = 0;
    }
    setAlbums([...albums]);
  }

  return (
    <div className="App">
      <Form albums={albums} setAlbums={setAlbums}/>
      <div className='w-100 d-flex justify-content-around flex-wrap'>

        {
          albums.map((item,i)=>{
            return <Album key={i} onDeleteHandler={()=>{onDeleteHandler(i)}} onLikeHandler={(amount)=>{onLikeHandler(i,amount)}} data={item}/>
          })
        }
      </div>
    </div>
  );
}

export default App;
