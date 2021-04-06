import React from 'react';
import styled from 'styled-components';

import Wrapper from '../wrapper/wrapper';

const Section1Styled = styled.div`
  background-color: #111 ;
 
  .active {
    border-bottom: 1px solid white;
  }
`;

export default function Services() {
  return (
    <Section1Styled id="Services">
      <Wrapper>
        <h1 className="Head1">Services</h1>
        <p className="BodyText">
        Web Development, Mobile Development, Desktop Application Development, Hosting
        </p>
      </Wrapper>
    </Section1Styled>
  );
}