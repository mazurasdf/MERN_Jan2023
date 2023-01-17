import React, {Component} from "react";

class ClassComp extends Component{
    constructor(props){
        super(props);
        this.state = {
            count: 0
        }
    }

    clickHandler(){
        this.setState({
            count: this.state.count + 1
        })
    }

    render(){
        return(
            <div>
                class component here!!
                <h1>Welcome, {this.props.name}</h1>
                <h1>{this.props.message}</h1>
                <h1>clicked: {this.state.count} times <button onClick={()=>this.clickHandler()}>click</button></h1>
            </div>
        )
    }
}

export default ClassComp;