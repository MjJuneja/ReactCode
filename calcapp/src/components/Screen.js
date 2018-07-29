import React , {Component} from 'react';

export default class ArithmeticBTN extends Component{
            

    render(){
        return(
        <div className="Screen">
            hey{false}dsa
          <input type="text" className="screen_bar" ref="screen" placeholder={this.props.firstNo} disabled="disabled"/>
        </div>
            
        );
    }
}