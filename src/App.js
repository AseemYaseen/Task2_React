import React from "react";
import Calculator from "./Components/calculator";
import LifeCycle from "./Components/lifeCycle";
import StateExam from "./Components/StateExam";



function App() {
  return (
  <div>
    {/* <StateExam /> */}
    <Calculator />
 
  </div>
  );
}


// class App extends React.Component{
//   constructor(props){
//     super(props)
//     this.state={
//       mount:true
//     }

//     this.mountCounter = ()=> this.setState({mount: true})
//     this.unmountCounter = ()=> this.setState({mount: false})
//   }

//   render(){
//     return <div>
//       <button onClick={this.mountCounter} disabled={this.state.mount} >Mount Counter</button>
//       <button onClick={this.unmountCounter} disabled={!this.state.mount}>Unmount Counter</button>
//       {this.state.mount ? <LifeCycle /> :<h1>This component is off !</h1>} 

//       {/* or null */}
      
//     </div>
//   }
// }


export default App;
