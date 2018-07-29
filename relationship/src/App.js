import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Child1 from './child1'

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      name:'ram',
      lname:''
    }
  }
  callfunction(childStr){
    this.setState({
      lname:childStr
    })
  }
  render() {
    return (
     <div>
     <h1>Relationship example</h1>
     <Child1 name={this.state.name} lname={this.state.lname} fn={this.callfunction.bind(this)}/>
     </div>  
    );
  }
}

export default App;
