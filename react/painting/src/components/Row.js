import React, {Component} from "react";
import ColorPixel from "./ColorPixel";

class Row extends Component{
    render(){
        return(
            <div className="d-flex justify-content-center">
                <ColorPixel/>
                <ColorPixel/>
                <ColorPixel/>
                <ColorPixel/>
                <ColorPixel/>
                <ColorPixel/>
                <ColorPixel/>
                <ColorPixel/>
                <ColorPixel/>
                <ColorPixel/>
            </div>
        )
    }
}

export default Row;