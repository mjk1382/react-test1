import React from "react";
import ReactDOM from "react-dom/client";
import './style.css'
 var interval
class Timer extends React.Component{
    constructor(){
        super();
        this.state = {
          time : 100
        }
      }
    
      componentDidMount(){
        interval = setInterval(()=>{
          this.setState({
            time: this.state.time - 1
          })
        } , 1000)
      }
      componentDidUpdate(){
        if(this.state.time==0){
            clearInterval(interval)
        }
      }
      render(){
        
        return(
          <h2 className="timer">{this.state.time}</h2>
    
        )
      }
    
}
export default Timer