import React, {Component} from "react";

class Pixel extends Component{
    constructor(props){
        super(props);
        this.state = {
            filled: false
        }
    }

    clickHandler(){
        this.setState({filled: !this.state.filled})
    }

    render(){
        return(
            <div className={this.state.filled ? "pixel filled" : "pixel"} onClick={()=>this.clickHandler()}>
                
            </div>
        )
    }
}

export default Pixel;