import axios from "axios";
export const Getcoindata=async(id)=>{
    const mydata=await axios.get(`https://api.coingecko.com/api/v3/coins/${id}`).then((response)=>{
        console.log(response)
        return response.data;
        }).catch((err)=>{
       console.log(err)
        })
        return mydata;
}