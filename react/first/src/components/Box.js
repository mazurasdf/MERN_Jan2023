import React, {Component} from 'react';

class Box extends Component{
    constructor(props){
        super(props);
    }

    render(){
        return(
            <div className={this.props.invert ? "invertedBox" : "box"}>
                <h1>hello there, {this.props.name.length >= 10 ? "too long!" : this.props.name}</h1>
            </div>
        )
    }
}

export default Box;