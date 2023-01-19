import React from "react";
import {useParams} from "react-router-dom";

const Repeater = (props) => {
    const {phrase} = useParams();

    return(
        <div>
            <marquee  direction="down">
                <marquee direction="right"><h1>your message: {phrase}</h1></marquee>
            </marquee>
        </div>
    )
}

export default Repeater;