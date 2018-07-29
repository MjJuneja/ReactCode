import React from 'react';
import './index.css'
import Footer from './components/common/footer';
import Header from './components/common/header';
import Content from './components/common/content';
function App(){
let myNewStyle = {
    background : 'yellow',
    color:'red',
    paddingLeft:'50px'
};

let name = "Mukul";

var jsx = <div><Header/><h1 className="myStyle" /*style = {myNewStyle}*/>Hello React {name}</h1> <Content/> <p style = {myNewStyle}>Hi</p><Footer/></div>;
return jsx;
}

export default App;