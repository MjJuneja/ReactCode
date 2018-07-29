import React, { Component } from 'react';
import './App.css';
import ArithmeticBTN from './components/Screen';

class App extends Component {

   constructor(props){
        super(props);
        this.number=0;
        this.state={
            firstvalue:0,
            secondvalue:0,
            result:0,
            buffer:0,

        };
    }
     async _value(event){
      
      if(this.number===0){
        this.number = event.target.innerHTML;
      }
      else{
        this.number+= event.target.innerHTML;
      }

      this.ReturnVal();

     await console.log("first:"+this.state.firstvalue);
     await console.log("/nSecond:"+ this.state.secondvalue);
    };

      async ReturnVal(){
       await this.setState({
        buffer:parseInt(this.number)
      })
      }

     _passValue(event){
      console.log(parseInt(this.number))
      if(this.state.firstvalue===0){
      this.setState({
        firstvalue:parseInt(this.number)
      })
    }
    else{
      this.setState({
        secondvalue:parseInt(this.number)
      })
    }

    
      this.number=0;
      this.ReturnVal();
    };

  render() {
    return (
     <div>
        <ArithmeticBTN firstNo={this.state.buffer} />
         <div className="arith_operations">
          <div className="arith_wrap">
          <button className="numeric" onClick={this._value.bind(this)}>9</button>
          <button className="numeric" onClick={this._value.bind(this)}>8</button>
          <button className="numeric" onClick={this._value.bind(this)}>7</button>
          </div>
          <div className="arith_wrap">
          <button className="numeric" onClick={this._value.bind(this)}>6</button>
          <button className="numeric" onClick={this._value.bind(this)}>5</button>
          <button className="numeric" onClick={this._value.bind(this)}>4</button>
          </div>
          <div className="arith_wrap">
          <button className="numeric" onClick={this._value.bind(this)}>3</button>
          <button className="numeric" onClick={this._value.bind(this)}>2</button>
          <button className="numeric" onClick={this._value.bind(this)}>1</button>
          </div>
        </div>  
        <div>
          <button onClick={this._passValue.bind(this)}>Enter</button>
        </div>
       </div>
    );
  }
}

export default App;
