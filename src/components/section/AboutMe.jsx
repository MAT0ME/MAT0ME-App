import React from 'react';
import styled from 'styled-components';

import Wrapper from '../wrapper/wrapper';

const Section1Styled = styled.div`
  background-color: rgba(17, 17, 17, 0.1);
  
  .active {
    border-bottom: 3px solid white;
  }
`;

export default function AboutMe() {
  return (
    <Section1Styled id="AboutMe">
      <Wrapper>
        <h1 className="Head1">About Me</h1>
        <p className="BodyText">
         Professionally connected with the mobile and web development spectrum

         Easy going laid back person, problem solver, one man amy person, 
         doesn't let small things go pass, a Fan of Anime, Sports and TV series

         Interested in The Web Application Development, Mobile Development and just having fun
        </p>
      </Wrapper>
    </Section1Styled>
  );
}