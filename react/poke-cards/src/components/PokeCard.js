import React, { useState, useEffect } from "react";
import axios from "axios";

const PokeCard = (props) => {
    const [pokeData, setPokeData] = useState(null);

    useEffect(()=>{
        console.log("component mounted");
        axios.get("https://pokeapi.co/api/v2/pokemon/"+props.name)
            .then(res => {
                console.log(res.data);
                setPokeData(res.data);
            })
            .catch(err => {
                console.log(err);
            })
    },[props.name])

    const fetchPokemon = () => {
        // fetch("")
        //     .then(res => res.json())
        //     .then(res => console.log(res))
        //     .catch(err => console.log(err))
    }

    return(
        pokeData === null 
        ?
        <div className="spinner-border text-primary" role="status">
            <span className="visually-hidden">Loading...</span>
        </div>
        :
        <div className="card" style={{width: "18rem"}}>
            <img src={pokeData.sprites.front_default} className="card-img-top" alt="Pikachu"/>
            <div className="card-body">
                <h5 className="card-title">{pokeData.name}</h5>
                <p className="card-text">types: {pokeData.types[0].type.name} {pokeData.types.length > 1 && pokeData.types[1].type.name}</p>
            </div>
        </div>
    )
}

export default PokeCard;