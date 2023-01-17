import React, { useState } from "react";

// const FunctionComp = ({name,message}) => {
const FunctionComp = (props) => {
    // const {name,message} = props;
    const [state, setState] = useState(0);
    const [secondCount, setSecondCount] = useState(0);

    const clickHandler = () => {
        setState(state + 1);
    }

    const secondClickHandler = () => {
        setSecondCount(secondCount + 2); 
    }

    return(
        <div>
            functional component here!!
            <h1>Welcome, {props.name}</h1>
            <h1>{props.message}</h1>
            <h1>clicked: {state} times <button onClick={clickHandler}>click</button></h1>
            <h2>second counter: {secondCount} times <button onClick={secondClickHandler}>click</button></h2>
        </div>
    )
}

export default FunctionComp;