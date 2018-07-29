import React,{Component} from 'react'

export default class Compute extends Component{
    constructor(props){
        super(props);
        this.state={
            hra:0,
            da:0,
            ta:0,
            ns:0,
            pf:1000
        };
      
    }

     computeHRA(){
    //    await this.setState({hra:parseInt(this.props.sal) * 0.30},function(){
    //        console.log(this.state.hra);
    //    }) 
    return (parseInt(this.props.sal)*0.30);
    }
     computeDA(){
    //   await  this.setState({da:parseInt(this.props.sal) * 0.20}) 
    return (parseInt(this.props.sal)*0.20);
    }
     computeTA(){
    //    await this.setState({ta:parseInt(this.props.sal) * 0.10}) 
    return (parseInt(this.props.sal)*0.10);
    }
    computeNS(){
        // this.computeHRA();
        // this.computeDA();
        // this.computeTA();
        console.log("da : "+this.props.sal );
        let totalSal = parseInt(this.props.sal) + this.computeHRA() + this.computeDA() + this.computeTA() - this.state.pf;
        this.setState({ns:totalSal})
        return this.state.ns; 
    }

    render(){
        return(
           <div> 
               <button onClick={this.computeNS.bind(this)}>Compute</button>
               <h2> Basic Salary is {this.props.sal} </h2>
               <h2> PF is {this.state.pf} </h2>
               <h2> Net Salary is {this.state.ns} </h2>
               <h2> HRA is {this.computeHRA()} </h2>
               <h2> DA is {this.computeDA()} </h2>
               <h2> TA is {this.computeTA()} </h2>
           </div>
        )
    }
}