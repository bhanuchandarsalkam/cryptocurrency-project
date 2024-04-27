import React from 'react';
import "./styles.css";
import NorthRoundedIcon from '@mui/icons-material/NorthRounded';
const BacktoTop = () => {
    let mybutton=document.getElementById("my-btn")
    window.onscroll=function(){
        scrollfunction();
    }
    function scrollfunction(){
        if(
            document.body.scrollTop>300||document.documentElement.scrollTop>300
        ){
            mybutton.style.display="block"
        }
        else{
            mybutton.style.display="none" 
        }
    }
    function Topfunction(){
        document.body.scrollTop=0;
        document.documentElement.scrollTop=0;  
    }
  return (
    <div className="back-to-top-btn" id="my-btn" onClick={()=>Topfunction()}>
      <NorthRoundedIcon style={{color:"var(--blue)"}}/>
    </div>
  )
}

export default BacktoTop;
