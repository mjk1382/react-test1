import React ,{useState} from "react";
import ReactDOM from "react-dom/client";
import './style.css'
import Text from "./Text";
import Timer from "./timer";
// class App extends React.Component{
//     constructor(){
//         super()
//         this.state={
//             title:"salam foe en"
//         }
//     }
//     handelText=()=>{
//         this.setState({
//             title:'supriseeee'
//         }
//     )
//     }
//  render(){
//    return(
//      <div>
//       <Text title={this.state.title}/>
//         <Timer handelText={this.handelText}/>
//     </div>
//    )
//  }
// }
const App = ()=>{
    const[title,setState]=useState("salam foe en")
    const handelText=()=>{
        setState('supriseeee123')
    }
    return(
        <div>
     <Text title={title}/>
        <Timer handelText={handelText}/>
        </div>
    )

}
export default App