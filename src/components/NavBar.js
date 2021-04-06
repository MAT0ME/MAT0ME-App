
import React from 'react';
import logo from "../M.gif";
import styled from 'styled-components';
import { Link } from 'react-scroll';
import OnScreenScrolling from './on-screen-scrolling/on-screen-scrolling.component';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faBars} from "@fortawesome/free-solid-svg-icons";

import Wrapper from './wrapper/wrapper';

const NavbarStyled = styled.div`
  font-size: 24px;
  position: fixed;
  width: 100%;
  .header {
    background: black;
    padding: 40px;
    display: flex;
    justify-content: space-around;
    margin: 0;
    color: white;
    * {
      cursor: pointer;
    }
    .active {
      border-bottom: 1px solid white;
    }
  }
  .scrolling-buttons {
    display: flex;
    flex-direction: column;
  }
`;





export default function Navbar() {
  
    return (
      
        <nav className="navbar navbar-expand-lg navbar-light bg-dark" id="navbar" position="fixed">
      <div className="container">
              <a className="navbar-brand" href="#"><img className="logo" src={logo} alt="lgog.."/></a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <FontAwesomeIcon icon={faBars} style={{color:"#fff"}}/>
        </button>
      
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item active">
            <Link className="nav-link" activeClass="active" to="Home" spy={true} smooth={true} duration={1000}> HOme</Link>
            </li>
            <li className="nav-item">
              
              <Link className="nav-link" activeClass="active" to="AboutMe" spy={true} smooth={true} duration={1000}> about me</Link>
            </li>
            <li className="nav-item">
              
              <Link className="nav-link" activeClass="active" to="Projects" spy={true} smooth={true} duration={1000}> Projects</Link>
            </li>
            <li className="nav-item">
      
              <Link className="nav-link" activeClass="active" to="Services" spy={true} smooth={true} duration={1000}> Services</Link>
            </li>
            <li className="nav-item">
              
              <Link className="nav-link" activeClass="active" to="Contact" spy={true} smooth={true} duration={1000}> contact</Link>
            </li>
           
          </ul>
          </div> 
        </div>
        <div>
   
      </div>
      </nav>
    )
}




