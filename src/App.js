import React from "react";
import ReactDOM from "react-dom/client";
import './style.css'
import Text from "./Text";
import Timer from "./timer";
class App extends React.Component{
 render(){
   return(
     <div>
      <Text/>
        <Timer/>
    </div>
   )
 }
}
export default App