import React from "react";
import ReactDOM from "react-dom/client";
const tick=()=>{
  const elem=(
    <div>
    <h1>hi guys</h1>
    <h2> it is {new Date().toLocaleTimeString()}</h2>
    </div>
  )
 ReactDOM.createRoot(document.getElementById("root")).render(elem);

}
setInterval(()=>{
  tick()
},1000)





// import React from "react";
// import ReactDOM from "react-dom/client";
// const set=()=>{
//   const time=(<div>
//     <h1>salammmmmm barikalllllllllllll</h1>
//     <h2>{new Date().toLocaleTimeString()}</h2>
//   </div>)
//   const root=ReactDOM.createRoot(document.getElementById('root'))
//   root.render(time)
// }
// setInterval(set,1000)


