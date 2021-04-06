import React from 'react';
import styled from 'styled-components';

import { animateScroll as scroll } from 'react-scroll';

const OnScreenScrollingStyled = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  .button-row {
    width: 100vw;
    display: flex;
    justify-content: space-between;
    div {
      margin: 0 10px;
    }
    button {
      padding: 3px;
      font-weight: bold;
      cursor: pointer;
    }
  }
  .bottom {
    margin-bottom: 115px;
  }
`;

export default function OnScreenScrolling() {
  // Scroll up
  function scrollToTop() {
    scroll.scrollToTop();
  }
  function scrollMoreUp300() {
    scroll.scrollMore(-300);
  }
  function scrollMoreUp100() {
    scroll.scrollMore(-100);
  }

  // Scroll down
  function scrollToBottom() {
    scroll.scrollToBottom();
  }
  function scrollMoreDown300() {
    scroll.scrollMore(300);
  }
  function scrollMoreDown100() {
    scroll.scrollMore(100);
  }

  return (
    <OnScreenScrollingStyled>
     
    </OnScreenScrollingStyled>
  );
}