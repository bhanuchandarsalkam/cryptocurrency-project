import React from 'react'
import "./styles.css"
import Button from '../../common/Button/button.js';
import gradient from  "../../../assets/gradient 1.png"
import iphone from  "../../../assets/phone 1.png"
import {motion} from "framer-motion";
const Maincomponent = () => {
  return (
    <div className='flex-info'>
      <div className="left-component">
        <motion.h1 className="track-crypto-heading" initial={{opacity:0,y:50}} animate={{opacity:1,y:0}} transition={{duration:1}}>Track Crypto</motion.h1>
        <motion.h1 className="real-time-heading" initial={{opacity:0,y:50}} animate={{opacity:1,y:0}} transition={{duration:1,delay:0.5}} >Real Time.</motion.h1>
        <motion.p className="info-text" initial={{opacity:0,y:50}} animate={{opacity:1,y:0}} transition={{duration:1,delay:1}}>track crypto through a public api in real time. visit the dashboard to do so!</motion.p>
        <motion.div className="btn-flex" initial={{opacity:0,y:50}} animate={{opacity:1,y:0}} transition={{duration:1,delay:1.5}}>
            <Button text={"Dashboard"}/>
            <Button text={"Share"} Outlined={true}/>
        </motion.div>
      </div>
      <div className="phone-container">
        <motion.img src={iphone} className="iphone" initial={{y:-10}} animate={{y:10}} transition={{type:"smooth",repeatType:"mirror",duration:2,repeat:Infinity}} />
        <img src={gradient} className="gradient"/>
      </div>
    </div>
  )
}

export default Maincomponent;
