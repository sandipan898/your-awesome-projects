import React, { useState } from "react";
import classes from "./Header.module.css";
import photo from "../../assets/966.jpg";
import hamburger from "../../assets/hamburger.png";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';
const Header = () => {
    const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <div>
      <div className={classes.nav}>
      <div className={classes.collapsableMenu}>
           <button  onClick={handleShow} >
        <img src={hamburger} alt="Hamburger" className="w-[50px]"/>
      </button>

      <Offcanvas show={show} onHide={handleClose}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Real Estate</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
        <div className={classes.buttongroup}>
            <button className={classes.collapsedButtons}>Rent</button>
            <button className={classes.collapsedButtons}>Buy</button>
            <button className={classes.collapsedButtons}>Sell</button>
            <button className={classes.collapsedButtons}>Manage Property</button>
            <button className={classes.collapsedButtons}>Resources</button>
        </div>
        
        </Offcanvas.Body>
      </Offcanvas>
           </div>
        <div className="flex xl:gap-[2rem] lg:gap-[1rem]">
          <img src={photo} alt="Logo" className="w-[10rem]" />
          <div className="flex xl:gap-[2rem] lg:gap-[1rem] items-center " >
        
            <button className={classes.headerButton}>Rent</button>
            <button className={classes.headerButton}>Buy</button>
            <button className={classes.headerButton}>Sell</button>
          <div className={classes.menu}>
          <Nav>
              <NavDropdown title="Manage Property" id="navbarScrollingDropdown">
                <NavDropdown.Item href="/">Not yet added</NavDropdown.Item>
                
              </NavDropdown>
            </Nav>
            </div>
            <div className={classes.menu}>
            <Nav >
              <NavDropdown title="Resources" id="basic-nav-dropdown">
                <NavDropdown.Item href="/">Not yet added</NavDropdown.Item>
                
              </NavDropdown>
            </Nav>
            </div>
           
          
          </div>
          
        </div>
        <div className="flex items-center gap-[2rem] ">
        <button className={classes.headerButtonLogin}>Login</button>
        <button className={classes.headerButtonSignUp}>Signup</button>
      </div>
      </div>
     
    </div>
  );
};

export default Header;
