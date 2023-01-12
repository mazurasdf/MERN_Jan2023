import React, {Component} from "react";

class TestComp extends Component{
    constructor(props){
        super(props);
        this.state = {
            count: 0
        }
    }

    // increaseCount(){
    //     console.log("clicked button");
    //     this.state.count++;
    // }
    increaseCount(){
        console.log("clicked button");
        // this.state.count++;
        this.setState({count: this.state.count + 1})
    }

    render(){
        // const increaseCount =()=>{
        //     console.log("clicked button");
        //     // this.state.count++;
        //     this.setState({count: this.state.count + 1})
        // }
        return(
            <div className="box">
                <h1>Welcome, {this.props.name}. Clicked {this.state.count} times</h1>
                <button onClick={this.increaseCount}>click me!</button>
            </div>
        )
    }
}

export default TestComp;