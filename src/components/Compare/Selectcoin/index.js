import React, { useEffect,useState } from 'react'
import { Get100coins } from '../../../functions/get100coins';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import "./styles.css";
const Selectcoin = ({crypto1,crypto2,handlecoinchange}) => {
    const[allcoins,setAllcoins]=useState([])
    const styles={
        height:"2.5rem",
        color:"var(--white)",
        "& .MuiOutlinedInput-notchedOutline":{
            borderColor:"var(--white)"
        },
        "& .MuiSvgIcon-root":{
            color:"var(--white)"
        },
        "&:hover":{
            "&& fieldset":{
                borderColor:"#3a80e9",
            },
        },
    }
    useEffect(()=>{
    getdata()
    },[])
    const getdata=async()=>{
        const mycoins=await Get100coins();
        setAllcoins(mycoins);
    }
    console.log("selection",allcoins)
  return (
    <div className="coin-flex"> 
        <p>crypto 1</p>
       <Select
        sx={styles}
          value={crypto1}
          label="crypto1"
          onChange={(event)=>handlecoinchange(event,false)}
        >
            { allcoins && allcoins.filter((item)=>item.id!=crypto2).map((item)=>{
              return<MenuItem value={item.id}>{item.name}</MenuItem>  
            })}
        </Select>
        <p>crypto 2</p>
       <Select
        sx={styles}
          value={crypto2}
          label="crypto2"
          onChange={(event)=>handlecoinchange(event,true)}
        >
            { allcoins && allcoins.filter((item)=>item.id!=crypto1).map((item)=>{
              return<MenuItem value={item.id}>{item.name}</MenuItem>  
            })}
        </Select>
    </div>
  )
}

export default Selectcoin;
