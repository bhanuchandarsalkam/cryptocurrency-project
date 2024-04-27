import React from 'react'
import "./styles.css";
const Button = ({text,onClick,Outlined}) => {
  return (
    <div className={Outlined?"outlined-btn":"btn"} onClick={()=>onClick()}>
      {text}
    </div>
  )
}

export default Button;
