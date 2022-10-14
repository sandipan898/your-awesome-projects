import React, { useState } from 'react'
import Form from 'react-bootstrap/Form';
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';
import NativeSelect from '@mui/material/NativeSelect';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import houses  from '../../dummy-data/dummy-data-houses';
import { DesktopDatePicker } from "@mui/x-date-pickers/DesktopDatePicker";
import { TextField } from '@mui/material';
import classes from './Homepage.module.css';
import Card from '../card/Card';
const Homepage = () => {
    const [Month, setMonth] = useState();//state to set month selected by user
  const [Location, setLocation] = useState("");//state to set location selected by user
  const [price, setPrice] = useState(null);//state to set price selected by user
  const [search, setSearch] = useState(null);//state to set search value by the user
  const [toggle, setToggle] = useState(false);//to toggle for displaying the results if results are available or to display not found 
  const [data, setData] = useState(null);//data from houses dummy file this state is basically for filtering the data
  const [type, setType] = useState(null);//state to set type of property {Appartment , house}

  const setPriceValue = (e) =>{
setPrice(e.target.value);              //to take the input
  }
  const setLocationValue = (e) =>{
    setLocation(e.target.value);        //to take the input
  }
  
  const setTypeValue = (e) =>{
    setType(e.target.value);             //to take the input
  }
  
  
  
 
  const submitHandler = (e)=>{
    e.preventDefault();//to prevent reload
    
  const sameprice = houses.filter((value)=>value.price < Number(price));//price match criteria
  const samelocation = sameprice.filter((value)=>value.location === Location);//location match criteria
  const samemonth = samelocation.filter((value)=>value.month === Month.$d.getMonth()+1);//month match criteria
  const sametype = samemonth.filter((value)=>value.type === type);//type math for apartment or houses
  setData(sametype);//now we got the filtered data

  //now we have  the fully filtered data in our data state

   

  }


 

  return (
    <div className='bg-[#faf1ff] p-[2rem]  '>
        <div className='mt-[2rem] flex justify-around items-center flex-wrap gap-[2rem] sm:gap-0 '>
            <h1 className="font-[500]">Search Properties For Rent</h1>
            <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search Properties"
              className="me-2"
              aria-label="Search"
              value={search}
              onChange={(e)=>{
                setSearch(e.target.value.toLowerCase());
                 const filteredsearch = houses.filter((item)=>item.name.toLowerCase().includes(search));
                 setData(filteredsearch);
               

              }}
              
            />
            </Form>

        </div>
        <div className="flex mx-auto mt-[5rem] sm:gap-[4rem] gap-[2rem] items-center justify-center flex-wrap sm:flex-row flex-col">

     
        <div>
        <FormControl className="sm:w-[10rem] w-[60vw]">
        <InputLabel variant="standard" htmlFor="uncontrolled-native">
          Location
        </InputLabel>
        <NativeSelect
          defaultValue={"New Delhi,India"}
          inputProps={{
            name: 'Location',
            id: 'uncontrolled-native',
          }}
          value={Location}
  onChange={setLocationValue}
        >
          <option value={"New Delhi,India"} >New Delhi , India</option>
          <option value={"Hyderabad,India"}>Hyderabad , India</option>
          <option value={"Mumbai,India"}>Mumbai , India</option>
        </NativeSelect>
      </FormControl>
        </div>
     
        <div>
        <LocalizationProvider dateAdapter={AdapterDayjs}>
        <DesktopDatePicker
  label="Available on"
  inputFormat="MM/YYYY" 
  value={Month}
  onChange={(newValue) => {
    setMonth(newValue);
  }}
  className="sm:w-[10rem] w-[60vw]"
  renderInput={(params) => {
    return <TextField {...params} />;
  }}
/>
</LocalizationProvider>
        </div>
     
        <div>
        <FormControl  className="sm:w-[10rem] w-[60vw]">
        <InputLabel variant="standard" htmlFor="uncontrolled-native">
         Price
        </InputLabel>
        <NativeSelect
          defaultValue={3000}
          inputProps={{
            name: 'price',
            id: 'uncontrolled-native',
          }}
          value={price}
          onChange={setPriceValue}
        >
          <option value={3000}>Choose price-range</option>
          <option value={1000}>500-1000</option>
          <option value={1500}>1000-1500</option>
          <option value={2000}>1500-2000</option>
        </NativeSelect>
      </FormControl>
        </div>
     
        <div> 
        <FormControl  className="sm:w-[10rem] w-[60vw]">
        <InputLabel variant="standard" htmlFor="uncontrolled-native">
         Property Type
        </InputLabel>
        <NativeSelect
          defaultValue={"Choose"}
          inputProps={{
            name: 'type',
            id: 'uncontrolled-native',
          }}
          value={type}
          onChange={setTypeValue}
        >
          <option value={"Choose"}>Choose your type</option>
          <option value={"House"}>House</option>
          <option value={"Apartment"}>Apartment</option>
          
        </NativeSelect>
      </FormControl>
        </div>
        <button className={classes.search} onClick={submitHandler}>Search</button>
        </div>
        
        <div className='flex justify-center gap-[3rem] flex-wrap items-center mt-[8rem]'>
          { data === null ? houses.map((item)=>(
            <Card name = {item.name} location = {item.location} price={item.price} key={item._id} beds = {item.beds} bathrooms = {item.bathroom} areas = {item.area} image = {item.image} />//rendering individual cards
            )) : 
              data.map((item)=>(
              <Card name = {item.name} location = {item.location} price={item.price} key={item._id} beds = {item.beds} bathrooms = {item.bathroom} areas = {item.area} image = {item.image} />
              )) 
         
        } 
         
        </div>
    </div>
  )
}

export default Homepage;