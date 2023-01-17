import React from "react";

const Album = (props) => {
    return(
        <div className="albumBox position-relative">
            <img src={props.data.imgURL} alt="Plastic Beach" />
            <h2>{props.data.title}</h2>
            <p>by {props.data.artist}, {props.data.year}</p>
            <p><span onClick={()=>props.onLikeHandler(-1)}>👎</span>{props.data.score}<span onClick={()=>props.onLikeHandler(1)}>👍</span></p>

            <button className="btn btn-danger btn-sm position-absolute bottom-0 end-0" onClick={props.onDeleteHandler}>x</button>
        </div>
    )
}

export default Album;