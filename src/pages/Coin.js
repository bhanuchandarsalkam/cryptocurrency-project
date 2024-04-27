import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import Header from '../components/common/Header/header';
import Loader from '../components/common/Loader';
import { settingCoinObject } from '../functions/Convertobjects';
import List from '../components/dashboard/List';
import Coininfo from '../components/coin/coininfo';
import { Getcoindata } from '../functions/getcoindata';
import { Getcoinprices } from '../functions/getcoinprices';
import Linechart from '../components/coin/linechart';
import Selectdays from '../components/coin/Selectdays';
import { Settingchartdata } from '../functions/Settingchartdata';
const Coinpage = () => {
    const {id}=useParams()
    const [loader,setLoader]=useState(true);
    const [coindata,setCoindata]=useState("");
    const [days,setDays]=useState(30);
    const [chartdata,setChartdata]=useState({})
    useEffect(()=>{
     if(id){
    getdata();
     }
    },[id])
    async function getdata(){
        const data=await Getcoindata(id)
        if(data){
            settingCoinObject(setCoindata,data)
            const prices=await Getcoinprices(id,days)
            if(prices){
                console.log("hai")
                Settingchartdata(setChartdata,prices)
                setLoader(false)
            }
        }
    }
    const handleChange=async(event)=>{
        setLoader(true)
        const prices=await Getcoinprices(id,event.target.value)
            if(prices.length>0){
                Settingchartdata(setChartdata,prices)
                setLoader(false)
            }
            setDays(event.target.value)
    }
    //console.log("coinjs",coindata)
  return (
    <div>
        <Header/>
     {loader?<Loader/>:(
        <>
     <div className="grey-wrapper" style={{padding:"0rem 1rem"}}>
        <List coin={coindata}/>
        </div>
        <Selectdays days={days} handledaysChange={handleChange}/>
     <div className="grey-wrapper">
        <Linechart chartData={chartdata}/>
        </div>
        </>)}
     <Coininfo heading={coindata.name} desc={coindata.desc}/>
    </div>
  )
}

export default Coinpage;
