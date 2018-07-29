import React,{Component} from 'react';


export default class Child1 extends Component{
    constructor(props){
        super(props);
    }
    childFn(){
        this.props.fn('kumar');
    }
    render(){
        return(
            <div>

        <h2>{this.props.name} {this.props.lname}</h2>
        <button onClick={this.childFn.bind(this)}>click</button>
                </div>
        )
    }
}