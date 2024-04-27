import React, { useEffect, useState } from 'react'
import Header from '../components/common/Header/header';
import Selectcoin from '../components/Compare/Selectcoin';
import Selectdays from '../components/coin/Selectdays';
import { settingCoinObject } from '../functions/Convertobjects';
import { Getcoinprices } from '../functions/getcoinprices';
import { Getcoindata } from '../functions/getcoindata';
import List from '../components/dashboard/List';
import Coininfo from '../components/coin/coininfo';
import { Settingchartdata } from '../functions/Settingchartdata';
import Linechart from '../components/coin/linechart';

const Comparepage = () => {
    const [crypto1,setCrypto1]=useState("bitcoin");
    const [crypto2,setCrypto2]=useState("ethereum");
    const [crypto1data,setCrypto1data]=useState({});
    const [crypto2data,setCrypto2data]=useState({});
    const [pricetype,setPricetype]=useState("prices")
    const[days,setDays]=useState(30);
    const [loader,setLoader]=useState(true)
    const[chartdata,setChartdata]=useState({})
    const handledaysChange=async(event)=>{
        setLoader(true);
        setDays(event.target.value);
        const prices1=await Getcoinprices(crypto1,event.target.value,pricetype)
        const prices2=await Getcoinprices(crypto2,event.target.value,pricetype)
        Settingchartdata(setChartdata,prices1,prices2)
        setLoader(false);
    }
    useEffect(()=>{
     getdata();
    },[])
    const getdata=async()=>{
        setLoader(true);
        const data1=await Getcoindata(crypto1)
        const data2=await Getcoindata(crypto2)
        console.log(data1,"",data2)
        if(data1){
            settingCoinObject(setCrypto1data,data1)
        }
        if(data2){
            settingCoinObject(setCrypto1data,data2)
            const prices1=await Getcoinprices(crypto1,days,pricetype)
            const prices2=await Getcoinprices(crypto2,days,pricetype)
                console.log("both prices fetched",prices1,prices2)
                Settingchartdata(setChartdata,prices1,prices2)
                setLoader(false)
        }
    }
    const handlecoinchange=async(event,iscoin2)=>{
        setLoader(true);
        if(iscoin2){
            setCrypto2(event.target.value);
            const data=await Getcoindata(event.target.value)
            settingCoinObject(setCrypto2data,data)
            const prices1=await Getcoinprices(crypto1,days,pricetype)
        const prices2=await Getcoinprices(crypto2,days,pricetype)
        if(prices1&&prices2){
            console.log("both prices fetched",prices1,prices2)
            //Settingchartdata(setChartdata,prices)
            setLoader(false)
        }
        }
        else{
        setCrypto1(event.target.value);
            const data=await Getcoindata(event.target.value)
            settingCoinObject(setCrypto1data,data)
        }
    }
  return (
    <div>
      <Header/>
      <div className="coins-days-flex">
      <Selectcoin crypto1={crypto1} crypto2={crypto2} handlecoinchange={handlecoinchange}/>
      {/* <Selectdays days={days} handledaysChange={handledaysChange} noptags="true"/> */}
      </div>
        {/* <div className="grey-wrapper" style={{padding:"0rem 1rem"}}>
        <List coin={crypto1data}/>
        </div>
        <div className="grey-wrapper" style={{padding:"0rem 1rem"}}>
        <List coin={crypto2data}/>
        // </div> */}
         {/* <div className="grey-wrapper">
         <Linechart chartData={chartdata} priceType={pricetype} MultiAxis={true}/>
          </div> */}
        <Coininfo heading={crypto1data.name} desc={crypto1data.desc}/>
        <Coininfo heading={crypto2data.name} desc={crypto2data.desc}/>
    </div>
  )
}

export default Comparepage;
