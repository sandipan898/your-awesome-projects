
import './App.css';
import {fetchWeather} from './api/fetchWeather'
import { useState } from 'react';


function App() {
  const [query, setquery] = useState('');
  const [weather, setWeather] = useState([])
  const search = async (e) =>{
    if(e.key === 'Enter'){
      const data = await fetchWeather(query)
        setWeather(data);
      setquery("")
    }
  }
  return (
   <div className="main-container">
     <input type="text" className='search' placeholder='Search Your City Here....' value={query} onChange={(e)=>{setquery(e.target.value)}} onKeyPress={search}/>
     
     {weather.main && (
       <div className="city">
         <h2 className="city-name">
           <span>{weather.name}</span>
           <sup>{weather.sys.country}</sup>
         </h2>
         <div className="city-temp">
           {Math.round(weather.main.temp)}
           <span>&deg; C</span>
         </div>
         <div className="info">
           <img className = "icon" src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`} alt={weather.weather[0].description} />
           <h3>{weather.weather[0].description}</h3>
         </div>

       </div>

  )}
   </div>
  );
}

export default App;
