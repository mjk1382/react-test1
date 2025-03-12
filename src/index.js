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
class Text extends React.Component{
  render(){
    return(
      <h1>salammmmmm barikalllllllllllll</h1>

    )
  }
}
class Timer extends React.Component{
  render(){
    return(
      <h2>{new Date().toLocaleTimeString()}</h2>

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

const set=()=>{

 const root=ReactDOM.createRoot(document.getElementById('root'))
 root.render(<App/>)
}
setInterval(set,1000)





