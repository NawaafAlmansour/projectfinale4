import React from 'react';
import { Jumbotron as Jumbo, Container } from 'react-bootstrap';
import styled from 'styled-components';


const Title = styled.div`
  .jumbo-text{
    color: #828282;
    margin-left: 10%;
  }
  `;

const Infopro = (props) => (
  <Title>
    <Jumbo fluid className='jumbotron jumbotron-fluid'>
      <Container className="jumbo-text">
        <h1>{props.title}</h1>
        <div>
          <ul>
            <li>{props.list1}</li>
            <li>{props.list1}</li>
            <li>{props.list1}</li>
          </ul>
        </div>
      </Container>
    </Jumbo>
  </Title>
)
export default Infopro
