import React from 'react'
import "./styles.css";
import AnchorTemporaryDrawer from './Drawer';
import Button from '../Button/button.js';
import { Link } from 'react-router-dom';
const Header = () => {
  return (
    <div className="navbar">
      <h1 className="logo">Cryptotracker<span style={{color:"var(--blue)"}}>.</span></h1>
      <div className="links">
        <Link to="/"><p className="link">Home</p></Link>
        {/* <Link to="/compare"><p className="link">Compare</p></Link>
        <Link to="/watchlist"><p className="link">Watchlist</p></Link> */}
        <Link to="/dashboard">
       <Button text={"dashboard"} onClick={()=>console.log("button clicked")}/>
       </Link>
      </div>
      <div className="drawer">
        <AnchorTemporaryDrawer/>
      </div>
    </div>
  )
}

export default Header;
