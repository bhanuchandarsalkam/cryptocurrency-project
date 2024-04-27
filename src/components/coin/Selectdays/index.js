import React,{useState} from 'react';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import "./styles.css";
export default function Selectdays({days,handledaysChange,noptags}) {
  return (
    <div className="select-days">
        {!noptags &&<p>price change in</p>}
        <Select
        sx={{
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
        }}
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={days}
          label="days"
          onChange={handledaysChange}
        >
          <MenuItem value={7}>7 days</MenuItem>
          <MenuItem value={30}>30 days</MenuItem>
          <MenuItem value={60}>60 days</MenuItem>
          <MenuItem value={90}>90 days</MenuItem>
          <MenuItem value={120}>120 days</MenuItem>
          <MenuItem value={365}>1 year</MenuItem>
        </Select>
    </div>
  );
}
