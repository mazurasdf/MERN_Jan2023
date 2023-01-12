import React, {Component} from "react";
var randomColor = require('randomcolor');

class ColorPixel extends Component{
    constructor(props){
        super(props);
        this.state = {
            bgColor: "white"
        }
    }

    clickHandler(){
        this.setState({bgColor: this.state.bgColor === "white" ? randomColor() : "white"})
    }

    render(){
        const customStyle = {
            backgroundColor: this.state.bgColor
        }

        return(
            <div className="pixel" style={customStyle} onClick={()=>this.clickHandler()}>
                
            </div>
        )
    }
}

export default ColorPixel;