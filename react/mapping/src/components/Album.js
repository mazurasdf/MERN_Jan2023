import React from "react";

const Album = (props) => {
    return(
        <div className="albumBox">
            <img src={props.imgURL} alt="Plastic Beach" />
            <h2>{props.title}</h2>
            <p>by {props.artist}, {props.year}</p>
        </div>
    )
}

export default Album;