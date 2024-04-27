import { Convertdate } from "./Convertdate"

export const Settingchartdata=(setChartdata,prices1,prices2)=>{
    if(prices2){
        setChartdata({
            labels:prices1.map((price)=>{return Convertdate(price[0])}),
           datasets:[{
            label:"crypto1",
            data:prices2.map((price)=>{return price[1]}),
            borderColor:"#3a80e9",
            borderWidth:2,
            fill:false,
            tension:0.25,
            pointRadius:0
           },
           {
            label:"crypto2",
            data:prices2.map((price)=>{return price[1]}),
            borderColor:"var(--green)",
            borderWidth:2,
            fill:false,
            tension:0.25,
            pointRadius:0
           }
        ]
        })
    }
    else{
        setChartdata({
            labels:prices1.map((price)=>{return Convertdate(price[0])}),
           datasets:[{
            data:prices1.map((price)=>{return price[1]}),
            borderColor:"#3a80e9",
            borderWidth:2,
            fill:true,
            tension:0.25,
            backgroundColor:"rgba(58,128,233,0.1)",
            pointRadius:0
           }]
        })
    }
}