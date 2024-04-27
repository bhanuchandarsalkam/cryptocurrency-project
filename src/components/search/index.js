import React, { useState } from 'react'
import "./styles.css";
import SearchRoundedIcon from "@mui/icons-material/SearchRounded"
const Search = ({search,searchchange}) => {
  return (
    <div className="search-flex">
        <SearchRoundedIcon/>
     <input type="text" placeholder="Search" value={search} onChange={(e)=>searchchange(e)}/>
    </div>
  )
}

export default Search;

