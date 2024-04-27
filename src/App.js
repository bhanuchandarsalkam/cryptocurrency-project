import React from 'react'
import "./index.css";
// import Header from './components/common/Header/header.js';
// import Maincomponent from './components/Landingpage/Maincomponent/index.js';
import{Routes,Route} from "react-router-dom";
import Home from './pages/Home';
import Dashboard from './pages/Dashboard';
import Coinpage from './pages/Coin';
import Comparepage from './pages/Comparepage';
const App = () => {
  return (
    <div>
      {/* <Header/>
      <Maincomponent/> */}
     <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/dashboard" element={<Dashboard/>}/>
      <Route path="/coin/:id" element={<Coinpage/>}/>
      {/* <Route path="/compare" element={<Comparepage/>}/> */}
     </Routes>
    </div>
  )
}

export default App
