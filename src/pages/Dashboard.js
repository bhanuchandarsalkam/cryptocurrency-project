import React, { useEffect, useState } from 'react'
import Header from '../components/common/Header/header';
import Tabscomponent from '../components/dashboard/Tabs';
import axios from "axios";
import Search from '../components/search';
import Loader from '../components/common/Loader';
import BacktoTop from '../components/BacktoTop';
import { Get100coins } from '../functions/get100coins';
const Dashboard = () => {
    const [coins,setCoins]=useState([]);
    const [search,setSearch]=useState("")
    const [loader,setLoader]=useState(true);
    useEffect(()=>{
    getdata();
    },[])
    const getdata=async()=>{
      const mycoins=await Get100coins();
      if(mycoins){
        setCoins(mycoins)
        setLoader(false);
      }
    }
    const searchchange=(e)=>{
    setSearch(e.target.value)
    }
    var filteredcoins=coins.filter(item=>item.name.includes(search.toLowerCase())||item.symbol.includes(search.toLowerCase()));
  return (
    <>
    <Header/>
    <BacktoTop/>
    { loader ?<Loader/>:(
    <div>
      <Search search={search} searchchange={searchchange}/>
      <Tabscomponent coins={filteredcoins}/> 
    </div>
)}
    </>
  )
}

export default Dashboard;
