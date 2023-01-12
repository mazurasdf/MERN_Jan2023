import React, {Component} from "react";

class Frame extends Component{
    render(){
        return(
            <div className="frame">
                {this.props.children}
            </div>
        )
    }
}

export default Frame;