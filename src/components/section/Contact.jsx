import React from 'react';
import styled from 'styled-components';
//import axios from "axios";
//import TextField from "@material-ui/core/TextField";
///import  '../Server/';

import Wrapper from '../wrapper/wrapper';

const Section1Styled = styled.div`
  background-color: #222;
  .active {
    border-bottom: 1px solid white;
  }
`;


const Contact = () => {
  
  return (
    <Section1Styled id="Contact">
      <Wrapper>
    
      <div class="formthree ptb-100">
    <div class="container">
        <div class="row">
        


        <div class="col-md-8 col-md-offset-2">
                <form>
                <div class="row">

                <div class="col-md-10">
                <div class="form-group"> 
                 <label class="sr-only">Name</label>
                 <input type="text" class="form-control" required="" id="nameSix" placeholder="Your Name"></input>
                </div>
                </div>

                <div class="col-md-10">
               
                <div class="form-group">
                <label class="sr-only">Email</label> 
                <input type="email" class="form-control" required="" id="emailSix" placeholder="Email Address"/>               
                </div>

                </div>
                
                </div>
               
                    <div class="form-group"> 
                    <label class="sr-only">Message</label> 
                    <textarea class="form-control" required="" rows="7" placeholder="Write Message"></textarea>
                    </div> 
                    <button type="submit"  className="btn-main-info-1">Send Message</button>
                </form>
            </div>
        </div> 
    </div> 
</div>




    
    </Wrapper>
    </Section1Styled>
  );
};

export default Contact;