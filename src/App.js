import React from "react";
import ReactDOM from "react-dom/client";
import './style.css'
import Text from "./Text";
import Timer from "./timer";
class App extends React.Component{
    constructor(){
        super()
        this.state={
            title:"salam foe en"
        }
    }
    handelText=()=>{
        this.setState({
            title:'supriseeee'
        }
    )
    }
 render(){
   return(
     <div>
      <Text title={this.state.title}/>
        <Timer handelText={this.handelText}/>
    </div>
   )
 }
}
export default App