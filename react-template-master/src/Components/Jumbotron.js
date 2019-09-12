import React from 'react';
import {Jumbotron as Jumbo , Container} from 'react-bootstrap';
import styled from 'styled-components';
import developer from '../assets/developer.jpg';

const Styles = styled.div`
  .jumbo {
    background: url(${developer}) no-repeat fixed bottom;
    background-size: cover;
    color: #efefef;
    height: 350px;
    position: relative;
    z-index: -2;
  }
  .overlay {
    background-color: #000;
    opacity: 0.6;
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    z-index: -1;
  }
  .jumbo-text{
    margin-top:  50px;
    margin-left:  100px;
    font-size: 30px;
    font-weight: 900;
    color: #ffc700;

  }
`;

export const Jumbotron = () => (
  <Styles>
    <Jumbo fluid className="jumbo">
      <div className="overlay"></div>
      <Container className="jumbo-text">
        <h1>Hello</h1>
        <h1> I'm Nawaf</h1>
      </Container>
    </Jumbo>
  </Styles>
);
