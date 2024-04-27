import React from 'react'
import { Line } from 'react-chartjs-2';
import { Chart as chartJS } from 'chart.js/auto'
const Linechart = ({chartData,priceType,multiAxis}) => {
    const options={
     plugins:{
        legend:{
            display:multiAxis?true:false
        },
     },
     responsive:true,
     interaction:{
        model:"index",
        intersect:false
     },
     scales:{
      crypto1:{
        type:"linear",
        display:true,
        position:"left",
       ticks:{
        callback:function(value,index,ticks){
          if(priceType=="prices") return "$"+value.toLocaleString();
          else{
            return "$"+value;
          }
        }
       }
      },
      crypto2:{
        type:"linear",
        display:true,
        position:"right",
        ticks:{
         callback:function(value,index,ticks){
           if(priceType=="prices") return "$"+value.toLocaleString();
           else{
             return "$"+value;
           }
         }
        }
       }
     }
    }
  return (
    <Line data={chartData} options={options}/>
  )
}

export default Linechart;
