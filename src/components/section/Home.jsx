import React from "react"
import Typed from "react-typed"


import styled from 'styled-components';




const Section1Styled = styled.div`
  background-color: darkviolet;
  .active {
    border-bottom: 1px solid white;
  }
`;

export default function Home() {
  return (
    <Section1Styled id="Home">
     
      <div className="header-wrapper">
            <div className="main-info">
                <h1>Mobile and Web Application Development</h1>
                <Typed
                className="typed_class"
                strings={["Mobile Application Development", "Web Application Development", "Desktop Development","E-Commerce"]}
                typeSpeed={40}
                backSpeed={67}
                loop
                />
                <a href="#" className="btn-main-info">contact me</a>
            </div>
        </div>
     
    </Section1Styled>
  );
}





