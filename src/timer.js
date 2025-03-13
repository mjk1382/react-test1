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
    startInterval=()=>{
        interval = setInterval(()=>{
            this.setState({
              time: this.state.time - 1
            })
          } , 1000)
    }
    
    stopInterval=()=>{
        clearInterval(interval)
    }
      componentDidMount(){
        this.startInterval()
      }
      componentDidUpdate(){
        if(this.state.time==0){
     this.stopInterval()
      }
      }
      render(){
        
        return(<>
          <h2 className="timer">{this.state.time}</h2>
          <button onClick={this.props.handelText}>change</button>
          <button onClick={this.startInterval}>start</button>
          <button onClick={this.stopInterval}>stop</button>
          </>
        )
      }
    
}
export default Timer