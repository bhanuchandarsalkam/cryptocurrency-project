import axios from "axios";
export const Getcoinprices=(id,days,pricetype)=>{
    const prices=axios.get(`https://api.coingecko.com/api/v3/coins/${id}/market_chart?vs_currency=usd&days=${days}&interval=daily`).then((response)=>{
            console.log("prices",response.data)
           return response.data[pricetype];
        }).catch((err)=>{
            console.log(err)
        })
        return prices;
}