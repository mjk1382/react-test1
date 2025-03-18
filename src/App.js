import React ,{useState,useEffect} from "react";
import ReactDOM from "react-dom/client";
import timerList from "./timerList";
import './style.css'
import Text from "./Text";
import Timer from "./timer";
import {TextContext} from "./testContext"
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
    const[islight,setislight]=useState(false)
    const[timeArr,setTimeArr]=useState([])

    useEffect(()=>{
        console.log("effect");
        
    },[islight])

    const handelislight=()=>{
        setislight(!islight)
    }
    return(
        <TextContext.Provider value={{
            timeArr:timeArr,
            setTimeArr:setTimeArr
        }}>
        <div className="main" style={{background:islight?"white":"black"}}>
        <Timer islight={islight}handelislight={handelislight} setTimeArr={setTimeArr}/>
        
        </div>
        </TextContext.Provider>
    )

}
export default App