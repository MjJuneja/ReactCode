import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import Compute from './compute.js';

class App extends Component {
  constructor(props){
    super(props);
    this.state={
      salary:0
    }
  }

  updateSalary(){
    this.setState({
      salary:this.refs.salarytxt.value
    })
  }

  render() {
    return (
      <div> 
        <h1> Salary Calc App </h1>
        <input type="text" onChange={this.updateSalary.bind(this)} ref="salarytxt" placeholder="type salary"/>
        <p> salary is {this.state.salary}</p>
        
        {/*<hr/>*/}
        <Compute sal={this.state.salary}/>
      </div>
    );
  }
}

export default App;
