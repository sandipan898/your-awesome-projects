import axios from 'axios'
const URL = "https://api.openweathermap.org/data/2.5/weather";
const API_Key = "08fef673e7d8e13f5ee8b7ccd39258ba";
 export const fetchWeather = async (query)=>{
 const {data} = await axios.get(URL,{
     params:{
         units:"metric",
         APPID:API_Key,
         q:query
     }
     
 })
 return data;
}