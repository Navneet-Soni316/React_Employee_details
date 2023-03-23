//        /***Prajwal Sir Crud op * */
 import React from 'react'
import Homepage from './Components/Homepage'
import Createusers from './Components/Createusers'
import Users from './Components/Users'
import Editusers from './Components/Editusers'
import Deleteusers from './Components/Deleteusers'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
const App = () => {
  return (
    <div>
      <BrowserRouter>
      <Homepage/>
      <Routes>
      <Route path="/" element={<Createusers/>}></Route>
      <Route path="/edit/:index" element={<Editusers/>}></Route>
      <Route path="/delete/:index" element={<Deleteusers/>}></Route>
      <Route path="/users" element={<Users/>}></Route></Routes></BrowserRouter>
      
    </div>
  )
}

export default App

/******* Practice crud op */
// import Home from "./Practice/Home"
// import CreateUsers from "./Practice/CreateUsers"
// import Users from "./Practice/Users"
// import EditUsers from "./Practice/EditUsers"
// import { BrowserRouter,Routes,Route } from "react-router-dom"

// const App=()=>{
//   return(
//     <div>
//       <BrowserRouter>
//       <Home/>
//       <Routes>
//         <Route path="/" element={<CreateUsers/>}></Route>
//         <Route path="/users" element={<Users/>}></Route>
//         <Route path="/edit/:idx" element={<EditUsers/>}></Route>
//         </Routes></BrowserRouter>
//     </div>
//   )
// }
// export default App