import React from "react";
import { Component } from "react";

// LifeCycle

// Mounting - it is this phase the component is created (your code , and react internals) then inserted into dom

// Updating - A React component "grows" by receiving new updates 

// Unmounting - Final phase , React component get removed from actual dom 



// Methods we use in component lifeCycle

// constructor method runs before the component rendered to the dom 

// componentDidMount() method runs after the component has been rendered to the dom 

// componentWillUnmount()

class LifeCycle extends React.Component{
    constructor(props){
        console.log('Constructor')
        super(props)

        this.state={
            counter:0,
            name : "Asem"
        }

    }

    incremant = ()=> this.setState({counter: this.state.counter+1})
    decremant = ()=> this.setState({counter: this.state.counter-1})


    componentDidMount(){
        console.log('Component did mount')
        console.log('-------------------')
    }

    componentDidUpdate(prevProps, prevState, snapshot){
        console.log('Component did Update');
        console.log('--------------------');
    }
    
    render(){
        console.log('Render')
        return <div>
            <button onClick={this.incremant}>Incremant</button>
            <button onClick={this.decremant}>Decremant</button>
            <div>
                Counter : {this.state.counter}
            </div>
        </div>
    }


}

export default LifeCycle


