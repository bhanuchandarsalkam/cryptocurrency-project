import React from 'react'
import "./styles.css";
const Coininfo = ({heading,desc}) => {
    //  const shortdesc=desc.slice(0,200) 
    //  console.log("hai",shortdesc)
    const longdesc=desc;
  return (
    <div className="grey-wrapper">
      <h2 className="coininfo-heading">{heading}</h2>
      <p className="coininfo-desc" dangerouslySetInnerHTML={{__html:desc}}/>
    </div>
  )
}

export default Coininfo;
