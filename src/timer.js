import React from "react";
import ReactDOM from "react-dom/client";
import './style.css'
 var interval
class Timer extends React.Component{
    constructor(){
        super();
      
        this.state = {
          hour:0,
          minute:0,
          second:0,
          isStart:false
        }
      }
    startInterval=()=>{
        if(this.state.isStart==false){
            this.setState({
                isStart: true
           
              })
            interval = setInterval(()=>{
               
                this.setState({
                  second: this.state.second + 1
             
                })
                if(this.state.second==59){
                    this.setState({
                        second: 0,
                        minute:this.state.minute + 1
                      })
                      if(this.state.minute==59){
                        this.setState({
                            minute: 0,
                            hour:this.state.hour + 1
                          })
                }
            }
        }
               , 1000)
        }
    }
    
    stopInterval=()=>{
        clearInterval(interval)
        this.setState({
            isStart: false
       
          })
    }
    resetInterval=()=>{
   
        clearInterval(interval)
        
        this.setState({
            second: 0
       
          })
          this.setState({
            minute: 0
       
          })
          this.setState({
            hour: 0
       
          })
          this.setState({
            isStart: false
       
          })
     
    }
   

      render(){
        
        return(<>
          <h2 className="timer">
            {`${this.state.hour > 9 ? this.state.hour: "0"+this.state.hour} : ${this.state.minute > 9 ? this.state.minute: "0"+this.state.minute} : ${this.state.second > 9 ? this.state.second: "0"+this.state.second}`}
            </h2>
          <button onClick={this.props.handelText}>change</button>
          <button onClick={this.startInterval}>start</button>
          <button onClick={this.stopInterval}>stop</button>
          <button onClick={this.resetInterval}>reset</button>
          </>
        )
      }
    
}
export default Timer