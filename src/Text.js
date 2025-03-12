
import React from "react";
import ReactDOM from "react-dom/client";
import './style.css'

class Text extends React.Component{
 
  render(){
    return(
      <h1 className="main">{this.props.title}</h1>

    )
  }
}

export default Text