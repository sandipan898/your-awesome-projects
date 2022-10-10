import React from 'react'
import { TextField } from '@mui/material'
import './Header.css'

import { ThemeProvider, createTheme } from '@mui/material/styles';
import MenuItem from '@mui/material/MenuItem';
import Categories from '../../data/Categories'


const Header = ({category , setCategory , word , setWord , LightMode}) => {
    const darkTheme = createTheme({
        palette: {
            primary:{
               main:LightMode ? "#000" : "#fff" 
            },
          mode: LightMode ? "light" :'dark',
        },
      });
      const handleChange = (language) =>{
        setCategory(language);
        setWord("")
      }
  return (
    <div className="header">
       <span className="title">{word?word:"Word Web"}</span>
       <div className="inputs">
           <ThemeProvider theme={darkTheme}>

       <TextField className='search'
           label="Search A Word" variant="standard"
           value={word}
           onChange={(e)=>setWord(e.target.value)}
           
           />
       <TextField
       select
       className='select'
          
         
          value={category}
          onChange={(e)=>handleChange(e.target.value)}
      
        
          label="Language"
          variant="standard"
        >
          {
              Categories.map((option)=>(
                 
                <MenuItem value={option.label} key={option.label}>
               {option.value}
                </MenuItem>
              ))
          }
         
       
        </TextField>
           </ThemeProvider>
       </div>
    </div>
  )
}

export default Header