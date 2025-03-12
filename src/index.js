//  import React from "react";
//  import ReactDOM from "react-dom/client";

// class App extends React.Component{
//   render(){
//     return(
//       <div>
//          <h1>salammmmmm barikalllllllllllll</h1>
//          <h2>{new Date().toLocaleTimeString()}</h2>
//      </div>
//     )
//   }
// }

// const set=()=>{

//   const root=ReactDOM.createRoot(document.getElementById('root'))
//   root.render(<App/>)
// }
// setInterval(set,1000)



import React from "react";
import ReactDOM from "react-dom/client";
import './style.css'
class Text extends React.Component{
 
  render(){
    return(
      <h1 className="main">salammmmmm barikalllllllllllll</h1>

    )
  }
}
class Timer extends React.Component{
  constructor(){
    super()
    this.state={
    time:new Date().toLocaleTimeString()
    }
  }
  render(){
    setInterval(() => {
      this.setState({
        time:new Date().toLocaleTimeString()

      })
    }, 1000);
    return(
      <h2 className="timer">{new Date().toLocaleTimeString()}</h2>

    )
  }
}

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


 const root=ReactDOM.createRoot(document.getElementById('root'))
 root.render(<App/>)






