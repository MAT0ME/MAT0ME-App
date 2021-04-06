import React from 'react';
import styled from 'styled-components';
import Card from "../Cards/cards"


const Section1Styled = styled.div`
  background-color: #222;
  .active {
    border-bottom: 1px solid white;
  }
`;

export default function Projects() {
  return (
    <Section1Styled id="Projects">
      <Card />
    </Section1Styled>
  );
}