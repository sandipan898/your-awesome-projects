import React, { useRef, useState } from "react";
import bed from '../../assets/bed-icon.png'
import bathroom from '../../assets/bathroom-icon.png'
import area from '../../assets/area-icon.png'

import Card from "react-bootstrap/Card";
import { Badge } from "react-bootstrap";
import classes from './Card.module.css'
const CardComponent = (props) => {
  const heartRef = useRef(null);
  const [toggle,setToggle] = useState(false);//toggle for like button

  const heartAnimation = () =>{
    setToggle(!toggle);
    if(toggle){
      heartRef.current.style.backgroundColor = "#c9c9c9"
    }
    else{
      heartRef.current.style.backgroundColor = "#ff2771"

    }
   
  }
  return ( 
    <div>
      <Card className={classes.card}>
        <Card.Img
          variant="top"
          src={props.image} className={classes.image}
        />
        <Badge pill className={classes.badge}>
        Popular
      </Badge>
        <Card.Body>
          <div>
            <div className="flex justify-between items-center">
            <div className="flex items-center">
              <p className="font-[700] text-purple-500 text-[1.5rem]">${props.price}</p>
              <p className="text-gray-500 text-xl">/month</p>
            </div>
            <div className="mr-[2rem] mt-[2rem]">
           <div className={classes.heart} onClick={heartAnimation} ref={heartRef}></div>
           <div className={classes.animationHeart}></div>
           </div>
  
      
            </div>
            <div className="flex flex-col">
            <h1 className="text-black font-700 font-[Montserrat] text-[1.5rem]">
              {props.name}
            </h1>
            <p className="text-gray-500 text-md">{props.location}</p>
            </div>
          
          <div className="flex justify-evenly">
            <div className="flex items-center gap-[5px] ">
            <img src={bed} alt="Beds" className="w-[1.5rem]" />
            <p className="text-gray-400 text-md mt-[1rem]">{props.beds} Beds</p>
            </div>
     
            <div className="flex items-center gap-[5px]">
            <img src={bathroom} alt="Bathrooms" className="w-[1.5rem]" />
            <p className="text-gray-400 text-md mt-[1rem]">{props.bathrooms} Bathrooms</p>

            </div>
       
            <div className="flex items-center gap-[5px]">
            <img src={area} alt="Beds" className="w-[1.5rem]" />
            <p className="text-gray-400 text-md mt-[1rem]">{props.areas} m<sup>2</sup></p>
            </div>
            </div>
          </div>
          
        </Card.Body>
      </Card>
    </div>
    
  );
};

export default CardComponent;
